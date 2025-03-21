import Providers from "@/providers";
// import GlobalStyle from "../styles/global";
import { ReactNode } from "react";

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
