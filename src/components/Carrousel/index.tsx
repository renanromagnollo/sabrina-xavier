import { ModalInsta } from "@/app/components/ModalInsta";
import { InstagramPostProps } from "@/types/post-instagram-types";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ArrowRounded } from "../Icons/ArrowRounded";
import { CardJob } from "@/app/components/Cards/ CardJob";

interface CarrouselProps {
  posts: InstagramPostProps[];
}

const Container = styled.div`
  /* position: relative; */
  width: 100%;
  overflow: hidden;
  /* margin: 20px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center; */
  /* background-color: darkmagenta; */
`;

const Gallery = styled.div`
  /* position: relative; */
  width: 80vw;
  padding: 30px 30px;
  display: flex;
  transition: transform 0.5s ease;
  /* gap: 100px;
  flex-wrap: nowrap;
  margin-top: 10px;
  justify-content: space-evenly; */
`;
export function Carrousel({ posts }: CarrouselProps) {
  const [modalOpened, setModalOpened] = useState(false);
  const [clickedImage, setClickedImage] = useState<InstagramPostProps | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  const [displayItems, setDisplayItems] = useState([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (posts.length > 0) {
      const galleryPhotos = posts?.filter(
        (post) => post.media_type !== "VIDEO"
      );
      setDisplayItems([
        galleryPhotos[galleryPhotos.length - 1],
        ...galleryPhotos,
        galleryPhotos[0],
      ]);
    }
  }, [posts]);

  useEffect(() => {
    if (isTransition) {
      function handleTransitionEnd() {
        if (currentIndex === 0) {
          wrapperRef.current.style.transition = "none";
          setCurrentIndex(displayItems.length - 2);
        } else if (currentIndex === displayItems.length - 1) {
          wrapperRef.current.style.transition = "none";
          setCurrentIndex(1);
        }
        setIsTransition(false);
      }
      const wrapperNode = wrapperRef.current;
      wrapperNode.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        wrapperNode.removeEventListener("transitionend", handleTransitionEnd);
      };
    }
  }, [isTransition, currentIndex, displayItems.length]);

  function nextSlide() {
    console.log(currentIndex);
    console.log(isTransition);
    console.log(wrapperRef?.current?.style);
    if (!isTransition && wrapperRef.current) {
      setIsTransition(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      wrapperRef.current.style.transition = "transform 0.5s ease";
      wrapperRef.current.style.transform = `translateX(-${
        (currentIndex + 1) * 100
      }%)`;
    }
  }
  function prevSlide() {
    console.log(currentIndex);
    console.log("div pressed");
    if (!isTransition && wrapperRef.current) {
      setIsTransition(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
      wrapperRef.current.style.transition = "transform 0.5s ease";
      wrapperRef.current.style.transform = `translateX(-${
        (currentIndex - 1) * 100
      }%)`;
      console.log(wrapperRef.current.style.left);
    }
  }

  function showOnModal(post: InstagramPostProps) {
    setClickedImage(post);
    setModalOpened(true);
  }

  //   const galleryPhotos = displayItems?.filter(
  //     (post) => post.media_type !== "VIDEO" && post.caption.includes("@")
  //   );
  return (
    <>
      <ModalInsta
        key={clickedImage?.id}
        isOpen={modalOpened}
        post={clickedImage}
        closeModal={(close) => setModalOpened(close)}
      />
      <Container>
        <div onClick={prevSlide}>
          <ArrowRounded direction="left" />
        </div>
        <Gallery ref={wrapperRef}>
          {displayItems?.map((post, i) => {
            if (post?.caption?.includes("@")) {
              return (
                <CardJob
                  clicked={(post) => showOnModal(post)}
                  key={i}
                  rotate={""}
                  post={post}
                />
              );
            }
          })}
        </Gallery>
        <div onClick={nextSlide}>
          <ArrowRounded />
        </div>
      </Container>
    </>
  );
}
