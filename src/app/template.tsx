import Providers from "@/providers";
// import GlobalStyle from "../styles/global";
import { ReactNode } from "react";

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
