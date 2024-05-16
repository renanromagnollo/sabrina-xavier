'use client'

import { Logotipo } from "@/components/Logo/Logotipo";
import Image from "next/image";
import styled from "styled-components";
import { Featured } from "./Featured";
import { MenuVertical } from "@/app/components/Menu/MenuVertical";

interface HeroProps {

}

const HeroContainer = styled.section`
  width: 80vw;
  height: 70vh;
  /* padding-top: 40px; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: pink; */

`
export function Hero(props : HeroProps){
    return(
      <HeroContainer>
        <Featured/>
        <MenuVertical/>
      </HeroContainer>
    )
}