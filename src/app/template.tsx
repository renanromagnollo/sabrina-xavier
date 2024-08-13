import Providers from "@/providers";
// import GlobalStyle from "../styles/global";
import { ReactNode } from "react";
import { ModalInsta } from "./components/ModalInsta";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

interface TemplateProps {
  children: ReactNode;
}

// const FooterDynamic = dynamic(() => import("../components/Footer"), {
//   ssr: false,
// });
export default function Template(props: TemplateProps) {
  return (
    <div>
      {/* <Providers> */}
      {/* <GlobalStyle /> */}

      {props.children}
      {/* <FooterDynamic /> */}
      {/* </Providers> */}
    </div>
  );
}
