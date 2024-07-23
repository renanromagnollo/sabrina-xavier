import styled from "styled-components";

interface MenuVerticalProps {}

const Menu = styled.nav`
  margin-top: 30px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  gap: 10px;
  color: ${({ theme }) => theme.colors.primary.dark};
  div {
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.primary.default};
    }
    h3 {
      font-size: 2rem;
    }
  }

  /* background-color: darkblue; */
`;

const DivMenu = styled.div`
  display: flex;
  justify-self: flex-end;

  @media (max-width: 1190px) {
    display: none;
  }
`;
export function MenuHero(props: MenuVerticalProps) {
  return (
    <DivMenu>
      <Menu>
        <div>
          <h3>Serviços</h3>
        </div>
        <div>
          <h3>Estúdio</h3>
        </div>
        <div>
          <h3>Dicas</h3>
        </div>
        <div>
          <h3>Contato</h3>
        </div>
      </Menu>
    </DivMenu>
  );
}
