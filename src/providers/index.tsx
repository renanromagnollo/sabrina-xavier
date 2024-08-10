"use client";

import { ReactNode } from "react";
import StyledComponentsProvider from "./StyledComponentsProvider";
import DataProvider from "@/context/data-context";
import ModalInstagramProvider from "@/context/modal-instagram-context";

interface ProvidersProps {
  children: ReactNode;
}
export default function Providers(props: ProvidersProps) {
  return (
    <StyledComponentsProvider>
      <ModalInstagramProvider>
        <DataProvider>{props.children}</DataProvider>
      </ModalInstagramProvider>
    </StyledComponentsProvider>
  );
}
