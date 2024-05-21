'use client'

import styled from "styled-components"
import { CardJob } from "./ CardJob"
import { ArrowRounded } from "@/components/Icons/ArrowRounded"

interface AlgunsTrabalhosProps {

}

const ContainerTrabalhos = styled.section`
  width: 100vw;
  /* height: 50vh; */
  position: relative;
  padding: 30px 0;
  margin: 20px 0;
  /* overflow: hidden; */
  background-color: ${({theme}) => theme.colors.dark.light};
  
  `
const BGContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 70%;
  background-color: ${({theme}) => theme.colors.primary.light};
  
`

const ContentJobs = styled.div`
  position: relative;
  /* width: 100vw; */
  height: 100%;
  margin-top: 10px;
  /* top: 0; */
  z-index: 20;
  background-color: transparent;
  /* width: 100%; */
`

const Carroussel = styled.div`
  /* position: relative; */
  /* width: 100vw; */
  margin: 20px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: darkmagenta; */
`

const ContentCards = styled.div`
  /* position: relative; */
  width: 80vw;
  padding: 30px 30px;
  display: flex;
  gap: 100px;
  flex-wrap: nowrap;
  margin-top: 10px;
  justify-content: space-evenly;
  /* overflow: hidden; */
  /* background-color: pink; */

`
const TitleSection = styled.div`
  /* width: 100vw; */
  margin: 0 20px;
  display: flex;
  justify-content: center;
  color: ${({theme}) => theme.colors.primary.dark};

`


export function AlgunsTrabalhos(props : AlgunsTrabalhosProps){
  const rotate = ['-4deg', '3deg', '-6deg']

  // for (let c=0; c===3; c++) {
  //   cards.push(<CardJob/>)
  // }
    return(
        <ContainerTrabalhos>
          <BGContainer/>
          <ContentJobs>
          <TitleSection>
            <h2>Alguns Trabalhos</h2>
          </TitleSection>
            <Carroussel>
              <ArrowRounded direction='left'/>
              <ContentCards>
                {rotate.map(r => <CardJob key={r} rotate={r}/>)}
              </ContentCards>
              <ArrowRounded />
            </Carroussel>

          </ContentJobs>
        </ContainerTrabalhos>
    )
}