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

const DivMenu = styled.div`
  display: flex;
  justify-self: flex-end;

  @media (max-width: 1020px) {
    display: none;
  }
`
export function MenuHero(props : MenuVerticalProps){
    return(
      <DivMenu>
        <Menu>
            <div><h4>Serviços</h4></div>
            <div><h4>Estúdio</h4></div>
            <div><h4>Dicas</h4></div>
            <div><h4>Contato</h4></div>
        </Menu>

      </DivMenu>
    )
}