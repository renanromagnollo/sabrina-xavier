'use client'

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
import { HairProducts } from "./components/pages/Home/HairProducts";

export default function Home() {
  // const [theme, setTheme] = useState<DefaultTheme>(light)
  const {setInstagramPosts} = useContext(DataContext)

  useEffect(() => {
    const getDatas = async () => {
      const dataInstagramPosts = await getFakeData('instagramPosts')
      if(dataInstagramPosts) {
        console.log('data InstagramPosts: ', dataInstagramPosts)
        setInstagramPosts(dataInstagramPosts)
      }
    }
    getDatas()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    // <ThemeProvider theme={theme}>
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'center'
      }}>
        <Hero/>
        <AlgunsTrabalhos/>
        <Studio/>
        <HairStyle/>
        <HairProducts/>
        <Instagram/>
          {/* <UnderConstruction/> */}
      </div>
        // </ThemeProvider>

  );
}
