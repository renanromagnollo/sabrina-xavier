"use client";

import { Logotipo } from "@/components/Logo/Logotipo";
import Image from "next/image";
import styled from "styled-components";
import { SabrinaXavier } from "./SabrinaXavier";
import { MenuHero } from "./MenuHero";
import { useState } from "react";
// import { ModalHero } from "./SabrinaXavier/ModalAboutMe";

interface HeroProps { }

const HeroContainer = styled.section`
  margin-top: 70px;
  width: 70vw;
  height: 70vh;
  /* padding-top: 40px; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: pink; */

  @media (max-width: 1400px) {
    width: 90vw;
  }
  @media (max-width: 800px) {
    width: 100vw;
    justify-content: space-evenly;
    padding: 0 20px;
  }
`;
export function Hero(props: HeroProps) {
  return (
    <HeroContainer>
      <SabrinaXavier />
      {/* <MenuHero /> */}
    </HeroContainer>
  );
}
