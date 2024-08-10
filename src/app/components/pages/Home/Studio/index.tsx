"use client";

import { LoadingCircle } from "@/components/Loadings/LoadingCircle";
import { DataContext } from "@/context/data-context";
import { HygraphAboutStudioProps } from "@/types/hygraph-types";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface StudioProps {}

const Container = styled.section`
  width: 100vw;
  height: 500px;
  margin: 40px 0;
  padding: 60px;
  display: flex;
  justify-content: center;
  gap: 30px;
  color: ${({ theme }) => theme.colors.primary.dark};
  background-color: ${({ theme }) => theme.colors.light.dark};
`;

const TextsArea = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  animation: enter 1.5s ease-out forwards;

  p {
    text-align: justify;
  }

  @keyframes enter {
    from {
      margin-left: 20px;
      opacity: 0;
    }
    to {
      margin-left: 0;
      opacity: 1;
    }
  }
`;

const ImageArea = styled.div`
  opacity: 0;
  animation: enter 1s ease-out forwards;

  @keyframes enter {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
export function Studio(props: StudioProps) {
  const { hygraphHome } = useContext(DataContext);
  const aboutStudioHygraph: HygraphAboutStudioProps = hygraphHome?.aboutStudio;

  const elementRef = useRef(null);
  const [isVisibled, setIsVisibled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 1) {
          setIsVisibled(true);
        } else if (entry.intersectionRatio > 0) {
          setIsVisibled(true);
        } else {
          setIsVisibled(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.5, 1],
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <Container ref={elementRef}>
      {!aboutStudioHygraph ? (
        <LoadingCircle />
      ) : (
        isVisibled && (
          <>
            <ImageArea>
              <Image
                src={
                  aboutStudioHygraph?.imageMain.url ??
                  `http://picsum.photos//${572}/${296}`
                }
                alt="studio-image"
                width={572}
                height={296}
                sizes="100%"
                style={{ objectFit: "cover" }}
                priority
                unoptimized
              />
            </ImageArea>
            <TextsArea>
              <h2>{aboutStudioHygraph?.title}</h2>
              <RichTextHygraph content={aboutStudioHygraph?.text.raw} />
            </TextsArea>
          </>
        )
      )}
    </Container>
  );
}
