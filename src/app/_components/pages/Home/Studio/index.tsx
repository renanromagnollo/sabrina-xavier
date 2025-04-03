"use client";

import { ButtonUnselected } from "@/app/_components/Buttons/ButtonUnselected";
import { LoadingCircle } from "@/app/_components/Loadings/LoadingCircle";
import { TitleSection } from "@/app/_components/TitleSection";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { useObserver } from "@/hooks/useObserver";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styled from "styled-components";


const Container = styled.section`
  width: 100%;
  overflow: hidden;
  margin: 40px 0;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: ${({ theme }) => theme.colors.primary.dark};
  background-color: ${({ theme }) => theme.colors.light.dark};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextsArea = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  gap: 10px;

  p {
    text-align: justify;
  }

  /* @keyframes enter {
    from {
      margin-left: 20px;
      opacity: 0;
    }
    to {
      margin-left: 0;
      opacity: 1;
    }
  } */
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
export function Studio() {

  const { data: aboutstudio, isFetching } = useHygraphQuery("aboutstudio");

  const elementRef = useRef<HTMLElement>(null);
  const { isVisibled, setElement } = useObserver();

  useEffect(() => {
    setElement(elementRef);
  }, [elementRef, setElement]);

  return (
    <Container ref={elementRef}>
      {isFetching ? (
        <LoadingCircle />
      ) : (
        aboutstudio && (
          <>
            <ImageArea >
              <Image
                src={
                  `/images/studio.jpeg`
                }
                alt="studio-image"
                placeholder="blur"
                width={372}
                height={400}
                sizes="fill"
                quality={75}
                style={{ objectFit: "cover" }}
                blurDataURL="data:image/jpeg"

              />
            </ImageArea>
            <TextsArea data-aos="fade-left">
              <TitleSection title={aboutstudio?.title} />
              <RichTextHygraph content={aboutstudio?.text} />
              <a
                href="https://maps.app.goo.gl/Lc2y7K3PHB382iccA"
                target="_blank"
              >
                <ButtonUnselected>Localização</ButtonUnselected>
              </a>
            </TextsArea>
          </>
        )
      )}
    </Container>
  );
}
