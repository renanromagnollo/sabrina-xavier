"use client";

import { ButtonUnselected } from "@/app/components/Buttons/ButtonUnselected";
import { TitleSection } from "@/app/components/TitleSection";
import { LoadingCircle } from "@/components/Loadings/LoadingCircle";
import { DataContext } from "@/context/data-context";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { useObserver } from "@/hooks/useObserver";
import { HygraphAboutStudioProps } from "@/types/hygraph-types";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";


const Container = styled.section`
  width: 100vw;
  /* height: 500px; */
  margin: 40px 0;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  gap: 10px;

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
export function Studio() {
  // const { data: hygraphHome } = useHygraphQuery(true, "home");
  // const aboutstudio: HygraphAboutStudioProps = hygraphHome?.aboutStudio;

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
        isVisibled && (
          <>
            <ImageArea>
              <Image
                src={
                  aboutstudio?.image ??
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
              <TitleSection title={aboutstudio?.title} />
              <RichTextHygraph content={aboutstudio?.text} />            <a
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
