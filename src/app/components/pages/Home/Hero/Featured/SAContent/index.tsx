/* eslint-disable react/no-unescaped-entities */
import { LogoName } from "@/components/Logo/LogoName"
import { Logotipo } from "@/components/Logo/Logotipo"
import styled from "styled-components"
import { ButtonsSA } from "./ButtonsSA"
import { LogoVertical } from "@/components/Logo/LogoVertical"

interface SAContentProps {

}

const SAContainer = styled.div`
  position: relative;
  width: 70%;
  height: 60vh;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  /* background-color: lightblue; */
  /* flex-direction: column; */
  /* background-color: orangered; */
  
  @media (max-width: 1400px) {
    justify-content: center;
  }
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }

`
const NameStyleMake = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 20px;
  h4 {
    /* margin-top: 10px; */
    color: ${({theme}) => theme.colors.primary.default}
  }
  span {
    color: ${({theme}) => theme.colors.primary.dark}
  }

  @media (max-width: 1400px) {
    display: none;
  }
`

const TextsContainer = styled.div `
  width: 55%;
/* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 10px;
  /* background-color: darkorange; */

  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    width: 90%;
    justify-content: center;
  }
`

const TextFeat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${({theme}) => theme.colors.primary.default};
  
  @media (max-width: 810px) {
    h1 {
      font-size: 4.5rem;
    }
  }
  @media (max-width: 700px) {
    justify-content: center;
    /* align-items: center; */
  }

`
const LogotipoArea = styled.div`
    position: absolute;
    display: block;
    left: 70px;
    top: 20px;

    @media (max-width: 1400px) {
      display: none;
    }
`

const DivLogoVertical = styled.div`
  display: none;
  /* background-color: lightblue; */

  @media (max-width: 1400px) {
    display: flex;
  }
  @media (max-width: 1069px) {
    justify-content: flex-end;
    svg {
      width: 80%;
      /* background-color: blueviolet; */
    }
  }
  @media (max-width: 900px) {
    svg {
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`

export function SAContent(props : SAContentProps){
    return(
      <SAContainer>
        <LogotipoArea>
          <Logotipo/>
        </LogotipoArea>
        <TextsContainer>
          <NameStyleMake>
            <LogoName/>
            <h4>hair style <br /><span>&</span> make up</h4>
          </NameStyleMake>
          <DivLogoVertical>
            <LogoVertical width={400}/>
          </DivLogoVertical>
          <TextFeat>
            <h1>"SEJA VOCÊ O SEU PADRÃO DE BELEZA"</h1>
            <h5>- Sabrina Xavier</h5>
            <ButtonsSA/>      
          </TextFeat>
        </TextsContainer>

      </SAContainer>
    )
}