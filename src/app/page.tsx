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
import { ModalInsta } from "./components/ModalInsta";
import { Address } from "@/components/Address";

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
      {/* <HairStyle /> */}
      {/* <Studio /> */}
      {/* <Instagram /> */}
      {/* <Dicas /> */}
      {/* <Address /> */}

      {/* <Products /> */}
      {/* <UnderConstruction/> */}
    </div>
    // </ThemeProvider>
  );
}
