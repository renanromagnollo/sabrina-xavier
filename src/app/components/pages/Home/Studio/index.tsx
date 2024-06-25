'use client'

import { DataContext } from "@/context/data-context"
import { HygraphAboutStudioProps } from "@/types/hygraph-types"
import { RichTextHygraph } from "@/utils/richtTextHygraph"
import Image from "next/image"
import { useContext } from "react"
import styled from "styled-components"

interface StudioProps {

}

const Container = styled.section`
  width: 100vw;
  height: 500px;
  margin: 40px 0;
  padding: 60px;
  display: flex;
  gap: 30px;
  color: ${({theme}) => theme.colors.dark.light};
  background-color: ${({theme}) => theme.colors.light.dark};
`

const TextsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;

  p {
    text-align: justify;
  }

`
export function Studio(props : StudioProps){
  const {hygraphHome} = useContext(DataContext)

  const aboutStudioHygraph: HygraphAboutStudioProps = hygraphHome?.aboutStudio
    return(
        <Container>
          <div>
            <Image 
              src={aboutStudioHygraph?.imageMain.url ?? `http://picsum.photos//${572}/${296}`}
              alt="studio-image"
              width={572}
              height={296}
              sizes="100%"
              style={{objectFit: 'cover'}}
              priority
              unoptimized
            />
          </div>
          <TextsArea>
            <h2>{aboutStudioHygraph?.title}</h2>
            <p><RichTextHygraph content={aboutStudioHygraph?.text.raw}/></p>
          </TextsArea>
        </Container>
    )
}