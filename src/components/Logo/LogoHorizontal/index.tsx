import styled from "styled-components";
import { LogoName } from "../LogoName";
import { Logotipo } from "../Logotipo";

interface LogoAreaProps {
  gap?: number;
}

interface LogoHorizontalProps extends LogoAreaProps {
  brandSize?: number;
  nameSize?: number;
}

const LogoArea = styled.div<LogoAreaProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ gap }) => gap}px;
`;
export function LogoHorizontal({
  brandSize = 30,
  nameSize = 220,
  gap = 10,
}: LogoHorizontalProps) {
  return (
    <LogoArea gap={gap}>
      <Logotipo size={brandSize} />
      <LogoName size={nameSize} />
    </LogoArea>
  );
}
