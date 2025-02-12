/* eslint-disable react/no-unescaped-entities */
import { LogoName } from "@/components/Logo/LogoName";
import { Logotipo } from "@/components/Logo/Logotipo";
import styled from "styled-components";
import { ButtonsSA } from "./ButtonsSA";
import { LogoVertical } from "@/components/Logo/LogoVertical";
import { useState } from "react";
import { randomPhrases } from "@/utils/randomPhrases";
import { ModalAboutMe } from "../ModalAboutMe";
import { LoadingFeatText } from "@/components/Loadings/LoadingFeatText";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { useQuery } from "@tanstack/react-query";

const SAContainer = styled.div`
  position: relative;
  width: 70%;
  height: 60vh;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  /* background-color: lightblue; */
  /* flex-direction: column; */
  /* background-color: orangered; */

  @media (max-width: 1400px) {
    justify-content: center;
  }
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 100%;
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
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 10px;
  /* background-color: darkorange; */

  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    width: 90%;
    justify-content: center;
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
  @media (max-width: 700px) {
    justify-content: center;
    > h1 {
      font-size: 3.5rem;
      text-align: center;
    }
  }
  @media (max-width: 470px) {
    > h1 {
      font-size: 3rem;
    }
  }
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
  /* background-color: lightblue; */

  @media (max-width: 1400px) {
    display: flex;
  }
  @media (max-width: 1069px) {
    justify-content: flex-end;
    svg {
      width: 80%;
      /* background-color: blueviolet; */
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

  const { data } = useHygraphQuery("powerphrases");
  // const api: API = new HygraphAPI()
  // const hygraphHome: THygraphHome = await api.getHygraphHome(true)

  const phrase = randomPhrases(data);

  function openModal() {
    setModalOpened(true);
  }
  function closeModal() {
    setModalOpened(false);
  }

  return (
    <SAContainer>
      {modalOpened && (
        <ModalAboutMe data={hygraphHome} closeModal={closeModal} />
      )}

      <LogotipoArea>
        <Logotipo />
      </LogotipoArea>
      <TextsContainer>
        <NameStyleMake>
          <LogoName />
          <LogoSub>
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
            <Phrase>{phrase && phrase.phrase}</Phrase>
            <Author>{phrase && `- ${phrase.author}`}</Author>
            <ButtonsSA openModal={openModal} />
          </TextFeat>
        )}
        {/* <Suspense fallback={<LoadingFeatText />}>
        </Suspense> */}
      </TextsContainer>
    </SAContainer>
  );
}
