import { Logotipo } from "@/components/Logo/Logotipo";
import Image from "next/image";
import styled from "styled-components";
import { SabrinaPhotos } from "../SabrinaXavier/SabrinaPhotos";
import { SAContent } from "../SabrinaXavier/SAContent";
import { PhotoSquare } from "@/components/PhotoSquare";
import { LogoVertical } from "@/components/Logo/LogoVertical";
import { useState } from "react";
import { ModalHero } from "./ModalAboutMe";

interface FeaturedProps {}

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-grow: 2;

  /* background-color: orange; */
  /* flex-direction: column; */

  @media (max-width: 700px) {
    /* height: 80vh; */
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
const MobilePhoto = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;
    margin-bottom: 15px;
  }
`;

const MobileLogo = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export function SabrinaXavier(props: FeaturedProps) {
  return (
    <Container>
      <MobileLogo>
        <LogoVertical />
      </MobileLogo>
      <MobilePhoto>
        <PhotoSquare
          src="/images/s1.jpg"
          width={170}
          height={247}
          rotate="2deg"
        />
      </MobilePhoto>
      <SAContent />
      <SabrinaPhotos />
    </Container>
  );
}
