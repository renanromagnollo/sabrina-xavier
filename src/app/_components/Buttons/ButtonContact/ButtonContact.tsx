import styled from "styled-components";

const ButtonArea = styled.div`
  height: 30px;
  overflow: hidden;
  :hover {
    background-color: ${({ theme }) => theme.colors.actions.sucess};
  }
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  color: ${({ theme }) => theme.colors.light.default};
  background-color: ${({ theme }) => theme.colors.secundary.dark};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    padding: 5px 10px;
  }
`;

export function ButtonContact({ children }: { children?: any }) {
  return (
    <ButtonArea>
      <a
        href="https://api.whatsapp.com/send?phone=5531985865002"
        target="_blank"
      >
        <Button>{children ?? <span>contato</span>}</Button>
      </a>
    </ButtonArea>
  );
}
