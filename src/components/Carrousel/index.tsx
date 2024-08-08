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
  width: 100%;
  overflow: hidden;
`;

const Gallery = styled.div<{ scrollX: number }>`
  width: 100%;
  margin: 30px 30px;
  display: flex;
  transition: 0.5s ease;
  gap: 80px;
  margin-left: ${({ scrollX }) => `${scrollX}px`};
`;

const ButtonsCarousel = styled.div`
  width: 100%;
  /* height: 200px; */
  margin: auto;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
`;
export function Carrousel({ posts }: CarrouselProps) {
  const [modalOpened, setModalOpened] = useState(false);
  const [clickedImage, setClickedImage] = useState<InstagramPostProps | null>(
    null
  );
  // const [isTransition, setIsTransition] = useState(false);
  const [displayItems, setDisplayItems] = useState([]);
  const [scrollX, setScrollX] = useState(30);
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

  // useEffect(() => {
  //   if (isTransition) {
  //     function handleTransitionEnd() {
  //       if (currentIndex === 0) {
  //         wrapperRef.current.style.transition = "none";
  //         setCurrentIndex(displayItems.length - 2);
  //       } else if (currentIndex === displayItems.length - 1) {
  //         wrapperRef.current.style.transition = "none";
  //         setCurrentIndex(1);
  //       }
  //       setIsTransition(false);
  //     }
  //     const wrapperNode = wrapperRef.current;
  //     wrapperNode.addEventListener("transitionend", handleTransitionEnd);

  //     return () => {
  //       wrapperNode.removeEventListener("transitionend", handleTransitionEnd);
  //     };
  //   }
  // }, [isTransition, displayItems.length]);

  // useEffect(() => {
  //   if (isTransition) {
  //     function handleTransitionEnd() {
  //       // setScrollX(wrapperRef.current?.style.marginLeft);
  //       setIsTransition(false);
  //     }
  //     const wrapperNode = wrapperRef.current;
  //     wrapperNode.addEventListener("transitionend", handleTransitionEnd);

  //     return () => {
  //       wrapperNode.removeEventListener("transitionend", handleTransitionEnd);
  //     };
  //   }
  // }, [isTransition]);

  function nextSlide() {
    if (wrapperRef.current) {
      setScrollX(
        -(wrapperRef.current?.scrollWidth - wrapperRef.current?.clientWidth) -
          30
      );
    }
  }
  function prevSlide() {
    if (wrapperRef.current) {
      let x = +(
        wrapperRef.current?.clientWidth / 2 -
        (wrapperRef.current?.scrollWidth - wrapperRef.current?.clientWidth)
      );
      setScrollX(x > 0 ? 30 : x);
    }
  }

  function showOnModal(post: InstagramPostProps) {
    setClickedImage(post);
    setModalOpened(true);
  }
  return (
    <>
      <ModalInsta
        key={clickedImage?.id}
        isOpen={modalOpened}
        post={clickedImage}
        closeModal={(close) => setModalOpened(close)}
      />
      <Container>
        <Gallery ref={wrapperRef} scrollX={scrollX}>
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
        <ButtonsCarousel>
          <div onClick={prevSlide}>
            <ArrowRounded direction="left" />
          </div>
          <div onClick={nextSlide}>
            <ArrowRounded />
          </div>
        </ButtonsCarousel>
      </Container>
    </>
  );
}
