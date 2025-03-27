/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { ButtonsSA } from "./ButtonsSA";
import { useState } from "react";
import { randomPhrases } from "@/utils/randomPhrases";
import { ModalAboutMe } from "../ModalAboutMe";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { Logotipo } from "@/app/_components/Logo/Logotipo";
import { LogoName } from "@/app/_components/Logo/LogoName";
import { LogoVertical } from "@/app/_components/Logo/LogoVertical";
import { LoadingFeatText } from "@/app/_components/Loadings/LoadingFeatText";

const SAContainer = styled.div`
  position: relative;
  width: 70%;
  /* height: 60vh; */
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;

  /* @media (max-width: 1400px) {
    justify-content: center;
  }
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 1100px) {
    width: 50%;
  } */
  @media (max-width: 768) {
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const NameStyleMake = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 20px;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const TextsContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 10px;
  
  /* @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    width: 90%;
  } */
  @media (max-width: 768px) {
    width: 100%;
    /* height: auto; */
    margin-right: 0;
    align-items: center;
    justify-content: flex-start;
  }
`;

const TextFeat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.primary.default};
  
  @media (max-width: 810px) {
    align-items: center;
    
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    justify-content: center;
    > h1 {
      font-size: 3.5rem;
      text-align: center;
    }
  }
  /* @media (max-width: 470px) {
    > h1 {
      font-size: 3rem;
    }
  } */
`;

const LogotipoArea = styled.div`
  position: absolute;
  display: block;
  left: 70px;
  top: 20px;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const LogoSub = styled.h3`
  color: ${({ theme }) => theme.colors.primary.default};
  font-size: 2.5rem;
  font-weight: 400;

  span {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const DivLogoVertical = styled.div`
  display: none;

  @media (max-width: 1400px) {
    display: flex;
  }
  @media (max-width: 1069px) {
    justify-content: flex-end;
    svg {
      width: 80%;
    }
  }
  @media (max-width: 900px) {
    svg {
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Phrase = styled.h1`
  font-size: 3.8rem;
  text-align: right;
  overflow-wrap: normal;
`;

const Author = styled.h2`
  font-size: 2.8rem;
  font-weight: 400;
`;

export function SAContent() {
  const [modalOpened, setModalOpened] = useState(false);

  const { data: phrases } = useHygraphQuery("powerphrases");
  const { data: aboutMe } = useHygraphQuery("aboutme");

  const phrase = randomPhrases(phrases);

  function openModal() {
    setModalOpened(true);
  }
  function closeModal() {
    setModalOpened(false);
  }

  return (
    <SAContainer>
      {modalOpened && (
        <ModalAboutMe data={aboutMe} closeModal={closeModal} />
      )}

      <LogotipoArea data-aos="fade-down"
        data-aos-duration="3000">
        <Logotipo />
      </LogotipoArea>
      <TextsContainer>
        <NameStyleMake>
          <LogoName />
          <LogoSub data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="1000">
            hair style <br />
            <span>&</span> make up
          </LogoSub>
        </NameStyleMake>
        <DivLogoVertical>
          <LogoVertical width={400} />
        </DivLogoVertical>
        {!phrase ? (
          <LoadingFeatText />
        ) : (
          <TextFeat>
            <Phrase data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="300">{phrase && phrase.phrase}</Phrase>
            <Author data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="400">{phrase && `- ${phrase.author}`}</Author>
            <ButtonsSA openModal={openModal} />
          </TextFeat>
        )}
      </TextsContainer>
    </SAContainer>
  );
}
