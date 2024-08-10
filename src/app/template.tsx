import Providers from "@/providers";
// import GlobalStyle from "../styles/global";
import { ReactNode } from "react";
import { ModalInsta } from "./components/ModalInsta";

interface TemplateProps {
  children: ReactNode;
}
export default function Template(props: TemplateProps) {
  return (
    <div>
      {/* <Providers> */}
      {/* <GlobalStyle /> */}

      {props.children}
      {/* </Providers> */}
    </div>
  );
}
