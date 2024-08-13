import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalStyle from "../styles/global";
import StyledComponentsRegistry from "../../lib/registry";
import Providers from "@/providers";
import Analytics from "@/components/Analytics";
import { Header } from "./components/Header";
import { ModalInsta } from "./components/ModalInsta";
import { Address } from "@/components/Address";

const inter = Inter({ subsets: ["latin"] });
console.log(inter);

export const metadata: Metadata = {
  title: "Sabrina Xavier",
  description: "Estúdio de beleza",
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

            {children}
          </Providers>
          <Analytics />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
