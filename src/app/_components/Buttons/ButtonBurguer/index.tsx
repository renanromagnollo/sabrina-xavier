import { useState } from "react";
import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

interface ButtonBurguerStyledProps {
  actived: boolean;
}

interface ButtonBurguerProps extends ButtonBurguerStyledProps {
  setOpenMenu: (state: any) => void;
}

const COLOR_DEFAULT = ({ theme }: { theme: DefaultTheme }) =>
  theme.colors.primary.dark;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 100%;
  cursor: pointer;
  visibility: hidden;

  @media (max-width: 600px) {
    visibility: visible;
  }
`;

const Burguer = styled.span<{ $actived: boolean }>`
  display: block;
  width: inherit;
  transition: 0.5s;

  &::after,
  &::before {
    content: "";
    display: block;
    position: relative;
    width: inherit;
    height: 2px;
    background: ${COLOR_DEFAULT};
    transition: 0.5s ease-in;
  }

  &::after {
    transform: ${({ $actived }) => ($actived ? "rotate(135deg) " : "none")};
    top: ${({ $actived }) => ($actived ? "-7px" : "0px")};
  }
  &::before {
    transform: ${({ $actived }) => ($actived ? "rotate(-135deg) " : "none")};
    top: ${({ $actived }) => ($actived ? "7px" : "0px")};
  }
`;

const MainLine = styled.div<{ $actived: boolean }>`
  width: ${({ $actived }) => ($actived ? "0px" : "inherit")};
  height: 2px;
  text-align: right;
  background-color: ${({ $actived }) =>
    $actived ? "transparent" : COLOR_DEFAULT};
  transition: ${({ $actived }) => ($actived ? "0.3s ease-out" : "1s ease-in")};
  margin: 5px 0;
  margin-left: ${({ $actived }) => ($actived ? "50%" : "0")};
`;

export function ButtonBurguer({ actived, setOpenMenu }: ButtonBurguerProps) {
  // const [state, setState] = useState(false);

  // function toogleState() {
  //   setOpenMenu((prev: boolean) => !prev);
  // }
  return (
    <ButtonArea>
      <Burguer
        $actived={actived}
        onClick={() => setOpenMenu((prevState: any) => !prevState)}
      >
        <MainLine $actived={actived} />
      </Burguer>
    </ButtonArea>
  );
}
