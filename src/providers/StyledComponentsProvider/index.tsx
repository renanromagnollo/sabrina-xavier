'use client'

import { ReactNode } from "react";
import StyledComponentsRegistry from "@/styles/registry";
import { ThemeProvider } from "styled-components";
import light from '@/styles/themes/light'

interface StyledComponentsProviderProps {
  children: ReactNode
}
export default function StyledComponentsProvider(props : StyledComponentsProviderProps){
    return(
        <StyledComponentsRegistry>
          <ThemeProvider theme={light}>
            {props.children}
          </ThemeProvider>
        </StyledComponentsRegistry>
    )
}