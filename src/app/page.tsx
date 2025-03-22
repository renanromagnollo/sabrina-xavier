// import light from "@/styles/themes/light";
import { Hero } from "./_components/pages/Home/Hero";
import { AlgunsTrabalhos } from "./_components/pages/Home/AlgunsTrabalhos";
import { Studio } from "./_components/pages/Home/Studio";
import { Instagram } from "./_components/pages/Home/Instagram";
import { HairStyle } from "./_components/HairStyle";
import { Dicas } from "./_components/Dicas";
import { MakeUp } from "./_components/MakeUp";
// import { HygraphHomeProps } from "@/types/hygraph-types";
// import { getHygraphPosts } from "@/utils/getHygraphPosts";
import { ModalDefault } from "./_components/ModalDefault";
import { Address } from "./_components/Address";

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
