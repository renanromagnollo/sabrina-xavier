import styled from "styled-components";
import { LogoName } from "../LogoName";
import { Logotipo } from "../Logotipo";
import Link from "next/link";

interface LogoAreaProps {
  $show: boolean;
  $gap?: number;
}

interface LogoHorizontalProps extends LogoAreaProps {
  brandSize?: number;
  nameSize?: number;
}

const LogoArea = styled.div<LogoAreaProps>`
  > a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${({ $gap }) => $gap}px;
    visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  }
`;
export function LogoHorizontal({
  brandSize = 30,
  nameSize = 220,
  $gap = 10,
  $show = true,
}: LogoHorizontalProps) {
  return (
    <LogoArea $gap={$gap} $show={$show}>
      <Link href={"/"}>
        <Logotipo size={brandSize} />
        <LogoName size={nameSize} />
      </Link>
    </LogoArea>
  );
}
