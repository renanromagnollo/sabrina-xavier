import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ModalDefaultContext } from '@/context/modal-default-context';
import { Portfolio } from '@/domain';
import { useCarousel } from '@/hooks/useCarousel';
import { CardJob } from '../Cards/ CardJob';
import { ArrowRounded } from '../Icons/ArrowRounded';

interface CarrouselProps {
  portfolio: Portfolio[] | undefined;
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  @media (max-width: 768px) {
    min-height: 400px;
  }
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
  const { emblaRef, scrollPrev, scrollNext } = useCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 3 }
    }
  })
  const { setModalItem } = useContext(ModalDefaultContext);
  const [displayItems, setDisplayItems] = useState<Portfolio[] | undefined>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const wrapperNode = wrapperRef.current;

  useEffect(() => {
    if (portfolio?.length) {
      setDisplayItems(portfolio)
    }
  }, [portfolio, wrapperNode]);


  return (
    <>
      <Container ref={emblaRef}>
        <Gallery
          ref={wrapperRef}
        >
          {displayItems?.map((item, i) => {
            return (
              <CardJob
                clicked={(item) => setModalItem(item)}
                key={i}
                item={item}
              />
            );
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
