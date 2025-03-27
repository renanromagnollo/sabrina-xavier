"use client";

import styled from "styled-components";
import { SabrinaXavier } from "./SabrinaXavier";

interface HeroProps { }

const HeroContainer = styled.section`
  margin-top: 70px;
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 1400px) {
    width: 90vw;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
    width: 100vw;
    /* flex-direction: column; */
    justify-content: flex-start;
    align-items: center;
    height: auto;
    /* padding: 0 20px; */
  }
`;
export function Hero(props: HeroProps) {
  return (
    <HeroContainer>
      <SabrinaXavier />
    </HeroContainer>
  );
}
