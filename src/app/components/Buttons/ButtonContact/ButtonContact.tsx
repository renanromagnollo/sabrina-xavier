import styled from "styled-components";

const ButtonArea = styled.div`
  width: 120px;
  height: 30px;
  overflow: hidden;
  :hover {
    background-color: ${({ theme }) => theme.colors.actions.sucess};
  }
`;

const Button = styled.button`
  /* padding: 5px 10px; */
  width: 100%;
  height: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.light.default};
  background-color: ${({ theme }) => theme.colors.secundary.dark};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: transparent; */
  /* box-sizing: border-box; */
  span {
    padding: 5px 10px;
  }

  /* :hover {
    background-color: ${({ theme }) => theme.colors.actions.sucess};
  } */
`;

interface ButtonContactProps {}
export function ButtonContact(props: ButtonContactProps) {
  return (
    <ButtonArea>
      <a
        href="https://api.whatsapp.com/send?phone=5531983954695"
        target="_blank"
      >
        <Button>
          <span>contato</span>
        </Button>
      </a>
    </ButtonArea>
  );
}
