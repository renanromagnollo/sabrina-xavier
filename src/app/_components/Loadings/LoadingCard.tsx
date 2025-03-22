import styled from "styled-components";
import { LoadingCircle } from "./LoadingCircle";

interface LoadingCardProps {
  width?: number;
  height?: number;
}

const AreaCard = styled.div<LoadingCardProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.light.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 0.5s ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  border-radius: 5px;

  @keyframes pulse {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }
`;

export function LoadingCard({ width = 290, height = 400 }: LoadingCardProps) {
  return (
    <AreaCard width={width} height={height}>
      <LoadingCircle />
    </AreaCard>
  );
}
