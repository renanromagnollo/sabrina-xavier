import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalStyle from "../styles/global";
import StyledComponentsRegistry from "../../lib/registry";
import Providers from "@/providers";
import Analytics from "@/components/Analytics";
import { Header } from "./components/Header";
import { ModalInsta } from "./components/ModalInsta";
import { Address } from "@/components/Address";
// import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "./components/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });
console.log(inter);

export const metadata: Metadata = {
  title: {
    default: "Sabrina Xavier",
    template: "%s | Sabrina Xavier",
  },
  icons: [
    {
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyle />
            <Header />
            <Breadcrumbs />
            {children}
            <Footer />
          </Providers>
          <Analytics />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
