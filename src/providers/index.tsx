"use client";

import { ReactNode } from "react";
import StyledComponentsProvider from "./StyledComponentsProvider";
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
          {props.children}
        </ModalInstagramProvider>
      </QueryClientProvider>
    </StyledComponentsProvider>
  );
}
