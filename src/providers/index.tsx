"use client";

import { ReactNode } from "react";
import StyledComponentsProvider from "./StyledComponentsProvider";
import DataProvider from "@/context/data-context";
import ModalInstagramProvider from "@/context/modal-instagram-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}
export default function Providers(props: ProvidersProps) {
  return (
    <StyledComponentsProvider>
      <QueryClientProvider client={client}>
        <ModalInstagramProvider>
          <DataProvider>{props.children}</DataProvider>
        </ModalInstagramProvider>
      </QueryClientProvider>
    </StyledComponentsProvider>
  );
}
