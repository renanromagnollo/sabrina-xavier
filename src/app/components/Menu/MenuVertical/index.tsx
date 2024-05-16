import styled from "styled-components"

interface MenuVerticalProps {

}

const Menu = styled.nav`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 1;
    gap: 10px;
    color: ${({theme}) => theme.colors.primary.dark};
    div {
      cursor: pointer;
      :hover {
        color: ${({theme}) => theme.colors.primary.default};
      }
    }

  /* background-color: darkblue; */

`
export function MenuVertical(props : MenuVerticalProps){
    return(
        <Menu>
            <div><h4>Serviços</h4></div>
            <div><h4>Estúdio</h4></div>
            <div><h4>Dicas</h4></div>
            <div><h4>Contato</h4></div>
        </Menu>
    )
}