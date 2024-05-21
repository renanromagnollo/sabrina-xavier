// 'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { UnderConstruction } from "@/components/UnderConstruction";
import { DefaultTheme, ThemeProvider } from "styled-components";
// import light from "@/styles/themes/light";
import { useState } from "react";
import { Hero } from "./components/pages/Home/Hero";
import { AlgunsTrabalhos } from "./components/pages/Home/AlgunsTrabalhos";

export default function Home() {
  // const [theme, setTheme] = useState<DefaultTheme>(light)
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
          {/* <UnderConstruction/> */}
      </div>
        // </ThemeProvider>

  );
}
