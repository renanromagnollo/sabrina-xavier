import styled from "styled-components"

interface ButtonsSAProps {

}

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
const ButtonsContent = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  /* align-content: flex-start; */
  align-self: flex-start;
  button {
    border-radius: 3px;
  }

  @media (max-width: 700px) {
    align-self: center;
  }
`

export function ButtonsSA(props : ButtonsSAProps){
    return(
      <ButtonsContent>
        <ButtonMoreAboutMe><h5>sobre mim</h5></ButtonMoreAboutMe>
        <ButtonContact><h5>contato</h5></ButtonContact>
      </ButtonsContent>
    )
}