/* eslint-disable react/no-unescaped-entities */
import { LogoName } from "@/components/Logo/LogoName"
import { Logotipo } from "@/components/Logo/Logotipo"
import styled from "styled-components"

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
`

const TextsContainer = styled.div `
  width: 55%;
/* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 10px;
`

const TextFeat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${({theme}) => theme.colors.primary.default};

`
const LogotipoArea = styled.div`
    position: absolute;
    display: block;
    left: 70px;
    top: 20px;
`

const ButtonsContent = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  /* align-content: flex-start; */
  align-self: flex-start;
  button {
    border-radius: 3px;
  }
`

const ButtonMoreAboutMe = styled.button`
  width: 120px;
  color: ${({theme}) => theme.colors.primary.default};
  /* padding: 5px 10px; */
  border: 2px solid ${({theme}) => theme.colors.primary.default};
  background-color: transparent;
  /* box-sizing: border-box; */
  h5 {
    padding: 5px 10px;
  }
  
  :hover {
    color: ${({theme}) => theme.colors.light.default};
    background-color: ${({theme}) => theme.colors.primary.default};
  }
`
const ButtonContact = styled.button`
  width: 120px;
  /* padding: 5px 10px; */
  border: none;
  color: ${({theme}) => theme.colors.light.default};
  background-color: ${({theme}) => theme.colors.secundary.dark};
  text-decoration: none;
  /* background-color: transparent; */
  /* box-sizing: border-box; */
  h5 {
    padding: 5px 10px;
  }
  
  :hover {
    background-color: ${({theme}) => theme.colors.actions.sucess};
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
          <TextFeat>
            <h1>"SEJA VOCÊ O SEU PADRÃO DE BELEZA"</h1>
            <h5>- Sabrina Xavier</h5>
            <ButtonsContent>
              <ButtonMoreAboutMe><h5>sobre mim</h5></ButtonMoreAboutMe>
              <ButtonContact><h5>contato</h5></ButtonContact>
            </ButtonsContent>
          </TextFeat>
        </TextsContainer>

      </SAContainer>
    )
}