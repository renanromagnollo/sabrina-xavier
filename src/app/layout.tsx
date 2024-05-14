import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalStyle from '../styles/global'
import StyledComponentsRegistry from "../../lib/registry";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

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
        <Providers>
          {/* <StyledComponentsRegistry> */}
            <GlobalStyle/>
            {children}
          {/* </StyledComponentsRegistry> */}
        </Providers>

      </body>
    </html>
  );
}
