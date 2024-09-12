"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { UnderConstruction } from "@/components/UnderConstruction";
import { DefaultTheme, ThemeProvider } from "styled-components";
// import light from "@/styles/themes/light";
import { useContext, useEffect, useState } from "react";
import { Hero } from "./components/pages/Home/Hero";
import { AlgunsTrabalhos } from "./components/pages/Home/AlgunsTrabalhos";
import { Studio } from "./components/pages/Home/Studio";
import { Instagram } from "./components/pages/Home/Instagram";
import { DataContext } from "@/context/data-context";
import { getFakeData } from "@/utils/fakeServer";
import { HairStyle } from "./components/HairStyle";
import { Products } from "./components/Products";
import { Dicas } from "./components/Dicas";
import { MakeUp } from "./components/MakeUp";
import { HygraphHomeProps } from "@/types/hygraph-types";
// import { getHygraphPosts } from "@/utils/getHygraphPosts";
import { ModalInsta } from "./components/ModalInsta";
import { Address } from "@/components/Address";
import { useReactQuery } from "@/hooks/useReactQuery";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";

// const URL_FETCH = "http://localhost:3333/";

export default function Home() {
  return (
    // <ThemeProvider theme={theme}>
    <div
      style={{
        width: "100vw",
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <ModalInsta />
      <Hero />
      <AlgunsTrabalhos />
      <MakeUp />
      <HairStyle />
      <Studio />
      <Instagram />
      <Dicas />
      <Address />

      {/* <Products /> */}
      {/* <UnderConstruction/> */}
    </div>
    // </ThemeProvider>
  );
}
