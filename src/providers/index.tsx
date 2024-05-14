'use client'

import { ReactNode } from "react"
import StyledComponentsProvider from "./StyledComponentsProvider"

interface ProvidersProps {
  children: ReactNode
}
export default function Providers(props : ProvidersProps){
    return(
        <StyledComponentsProvider>
          {props.children}
        </StyledComponentsProvider>
    )
}