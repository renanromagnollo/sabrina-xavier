"use client";

import { ReactNode } from "react";
import StyledComponentsProvider from "./StyledComponentsProvider";
import ModalDefaultProvider from "@/context/modal-default-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}
export default function Providers(props: ProvidersProps) {
  return (
    <StyledComponentsProvider>
      <QueryClientProvider client={client}>
        <ModalDefaultProvider>
          {props.children}
        </ModalDefaultProvider>
      </QueryClientProvider>
    </StyledComponentsProvider>
  );
}
