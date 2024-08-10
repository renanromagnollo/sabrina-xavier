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
import { HairStyle } from "./components/pages/Home/HairStyle";
import { Products } from "./components/Products";
import { Dicas } from "./components/pages/Home/Dicas";
import { MakeUp } from "./components/pages/Home/MakeUp";
import { HygraphHomeProps } from "@/types/hygraph-types";
import { getHygraphPosts } from "@/utils/getHygraphPosts";
import { ModalInsta } from "./components/ModalInsta";

export default function Home() {
  // const [theme, setTheme] = useState<DefaultTheme>(light)
  const {
    setInstagramPosts,
    setHygraphHome,
    setPosts,
    setTestimonials,
    hygraphHome,
  } = useContext(DataContext);

  useEffect(() => {
    const getDatas = async () => {
      const dataInstagramPosts = await getFakeData("instagramPosts");
      const dataHygraphHome: HygraphHomeProps = await getFakeData(
        "hygraphHome"
      );
      if (dataInstagramPosts) {
        console.log("data InstagramPosts: ", dataInstagramPosts);
        setInstagramPosts(dataInstagramPosts);
        // console.log(postsWithSlug[0]);
      }
      if (dataHygraphHome) {
        const postsWithSlug = await getHygraphPosts();
        console.log("data HygraphHome", dataHygraphHome);
        setHygraphHome(dataHygraphHome);
        setPosts(postsWithSlug);
      }
    };
    getDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <ThemeProvider theme={theme}>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <ModalInsta />
      <Hero />
      <AlgunsTrabalhos />
      <Studio />
      <HairStyle />
      <MakeUp />
      <Instagram />
      <Dicas />
      <Products />
      {/* <UnderConstruction/> */}
    </div>
    // </ThemeProvider>
  );
}
