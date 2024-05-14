import Providers from "@/providers"
import { ReactNode } from "react"

interface TemplateProps {
  children: ReactNode
}
export default function Template(props : TemplateProps){
    return(
        <div>
          {/* <Providers> */}
            {props.children}
          {/* </Providers> */}
        </div>
    )
}