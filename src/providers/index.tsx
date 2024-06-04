'use client'

import { ReactNode } from "react"
import StyledComponentsProvider from "./StyledComponentsProvider"
import DataProvider from "@/context/data-context"

interface ProvidersProps {
  children: ReactNode
}
export default function Providers(props : ProvidersProps){
    return(
        <StyledComponentsProvider>
          <DataProvider>
            {props.children}

          </DataProvider>
        </StyledComponentsProvider>
    )
}