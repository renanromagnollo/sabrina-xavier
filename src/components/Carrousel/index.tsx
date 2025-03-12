import { ModalInsta } from '@/app/components/ModalInsta';
import { InstagramPostProps } from '@/types/post-instagram-types';
import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ArrowRounded } from '../Icons/ArrowRounded';
import { CardJob } from '@/app/components/Cards/ CardJob';
import { ModalInstagramContext } from '@/context/modal-instagram-context';
import { Portfolio } from '@/domain';
import { useCarousel } from '@/hooks/useCarousel';

interface CarrouselProps {
  portfolio: Portfolio[];
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const Gallery = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  /* gap: 80px; */
  /* transition: 0.5s ease;
  animation: entrance 1s ease-out;

  @keyframes entrance {
    0% {
      margin-left: 100vw;
    }
    100% {
      margin-left: 30px;
    }
  } */
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

export function Carrousel({ portfolio }: CarrouselProps) {
  // const [modalOpened, setModalOpened] = useState(false);
  // const [clickedImage, setClickedImage] = useState<InstagramPostProps | null>(
  //   null
  // );
  // const [isTransition, setIsTransition] = useState(false);
  const { emblaRef, scrollPrev, scrollNext } = useCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    // speed: 300,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 3 }
    }
  })
  const { setModalItem } = useContext(ModalInstagramContext);
  const [displayItems, setDisplayItems] = useState<Portfolio[]>();
  // const [scrollX, setScrollX] = useState(30);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const wrapperNode = wrapperRef.current;

  useEffect(() => {
    if (portfolio?.length) {
      setDisplayItems(portfolio)
    }
  }, [portfolio, wrapperNode]);


  // useEffect(() => {
  //   console.log(window.innerWidth);
  //   console.log(wrapperRef.current?.scrollWidth);
  //   console.log(wrapperRef.current?.style.marginLeft);
  //   console.log(scrollX);
  // }, [scrollX]);

  // function nextSlide() {
  //   if (wrapperRef.current) {
  //     let x = scrollX - window.innerWidth / 2;
  //     if (window.innerWidth - wrapperRef.current.scrollWidth > x) {
  //       x = window.innerWidth - wrapperRef.current.scrollWidth - 30;
  //     }
  //     setScrollX(x);
  //   }
  // }

  // function prevSlide() {
  //   if (wrapperRef.current) {
  //     let x = scrollX + window.innerWidth / 2;
  //     setScrollX(x > 30 ? 30 : x);
  //   }
  // }

  // function showOnModal(post: InstagramPostProps) {
  //   setClickedImage(post);
  //   setModalOpened(true);
  // }
  return (
    <>
      <Container ref={emblaRef}>
        <Gallery
          ref={wrapperRef}
        >
          {displayItems?.map((item, i) => {
            // if (item?.caption?.includes('@')) {
            return (
              <CardJob
                clicked={(item) => setModalItem(item)}
                key={i}
                rotate={''}
                item={item}
              />
            );
            // }
          })}
        </Gallery>
        <ButtonsCarousel>
          <div onClick={scrollPrev}>
            <ArrowRounded direction="left" />
          </div>
          <div onClick={scrollNext}>
            <ArrowRounded />
          </div>
        </ButtonsCarousel>
      </Container>
    </>
  );
}
