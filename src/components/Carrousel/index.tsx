import { ModalInsta } from "@/app/components/ModalInsta";
import { InstagramPostProps } from "@/types/post-instagram-types";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ArrowRounded } from "../Icons/ArrowRounded";
import { CardJob } from "@/app/components/Cards/ CardJob";
import { ModalInstagramContext } from "@/context/modal-instagram-context";

interface CarrouselProps {
  posts: InstagramPostProps[];
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const Gallery = styled.div<{ scrollX: number }>`
  width: 100%;
  margin: 30px 30px;
  display: flex;
  transition: 0.5s ease;
  gap: 80px;
  margin-left: ${({ scrollX }) => `${scrollX}px`};
  animation: entrance 1s ease-out;

  @keyframes entrance {
    0% {
      margin-left: 100vw;
    }
    100% {
      margin-left: 30px;
    }
  }
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
  // const [modalOpened, setModalOpened] = useState(false);
  // const [clickedImage, setClickedImage] = useState<InstagramPostProps | null>(
  //   null
  // );
  // const [isTransition, setIsTransition] = useState(false);
  const { setModalItem } = useContext(ModalInstagramContext);
  const [displayItems, setDisplayItems] = useState([]);
  const [scrollX, setScrollX] = useState(30);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const wrapperNode = wrapperRef.current;

  useEffect(() => {
    if (posts.length > 0) {
      const galleryPhotos = posts?.filter(
        (post) => post.media_type !== "VIDEO"
      );
      setDisplayItems([...galleryPhotos, ...galleryPhotos]);
    }

    // wrapperNode?.addEventListener("transitionstart", () =>
    //   setIsTransition(true)
    // );
    // wrapperNode?.addEventListener("transitionend", () =>
    //   setIsTransition(false)
    // );

    // return () => {
    //   wrapperNode?.removeEventListener("transitionstart", () =>
    //     setIsTransition(true)
    //   );
    //   wrapperNode?.removeEventListener("transitionstart", () =>
    //     setIsTransition(false)
    //   );
    // };
  }, [posts, wrapperNode]);

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

  useEffect(() => {
    console.log(window.innerWidth);
    // console.log(wrapperRef.current?.clientWidth);
    console.log(wrapperRef.current?.scrollWidth);
    console.log(wrapperRef.current?.style.marginLeft);
    console.log(scrollX);
  }, [scrollX]);

  function nextSlide() {
    if (wrapperRef.current) {
      let x = scrollX - window.innerWidth / 2;
      if (window.innerWidth - wrapperRef.current.scrollWidth > x) {
        x = window.innerWidth - wrapperRef.current.scrollWidth - 30;
      }
      setScrollX(x);
    }
  }
  function prevSlide() {
    if (wrapperRef.current) {
      let x = scrollX + window.innerWidth / 2;
      setScrollX(x > 30 ? 30 : x);
    }
  }

  // function showOnModal(post: InstagramPostProps) {
  //   setClickedImage(post);
  //   setModalOpened(true);
  // }
  return (
    <>
      <Container>
        <Gallery
          ref={wrapperRef}
          scrollX={scrollX}
          style={{ marginLeft: `${scrollX}px` }}
        >
          {displayItems?.map((post, i) => {
            if (post?.caption?.includes("@")) {
              return (
                <CardJob
                  clicked={(post) => setModalItem(post)}
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
