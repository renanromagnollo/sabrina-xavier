// import light from "@/styles/themes/light";
import { Hero } from "./components/pages/Home/Hero";
import { AlgunsTrabalhos } from "./components/pages/Home/AlgunsTrabalhos";
import { Studio } from "./components/pages/Home/Studio";
import { Instagram } from "./components/pages/Home/Instagram";
import { HairStyle } from "./components/HairStyle";
import { Dicas } from "./components/Dicas";
import { MakeUp } from "./components/MakeUp";
// import { HygraphHomeProps } from "@/types/hygraph-types";
// import { getHygraphPosts } from "@/utils/getHygraphPosts";
import { ModalDefault } from "./components/ModalDefault";
import { Address } from "@/components/Address";

// const URL_FETCH = "http://localhost:3333/";

export default function Home() {
  return (
    // <ThemeProvider theme={theme}>
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingBottom: '20px'
      }}
    >
      <ModalDefault />
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
