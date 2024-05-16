import { Logotipo } from "@/components/Logo/Logotipo"
import Image from "next/image"
import styled from "styled-components"
import { SabrinaPhotos } from "../SabrinaPhotos"
import { SAContent } from "../SAContent"

interface FeaturedProps {

}

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-grow: 2;
  /* flex-direction: column; */
`

export function Featured(props : FeaturedProps){
    return(
        <Container>
          <SAContent/>
          <SabrinaPhotos/>
        </Container>
    )
}