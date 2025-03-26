import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalStyle from "../styles/global";
import StyledComponentsRegistry from "../../lib/registry";
import Providers from "@/providers";
import Analytics from "./_components/Analytics";
import { Header } from "./_components/Header";
import dynamic from "next/dynamic";
import { Footer } from "./_components/Footer";
import { Breadcrumbs } from "./_components/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

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
