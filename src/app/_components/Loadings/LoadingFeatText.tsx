import styled from "styled-components";

const Area = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const Line = styled.div<{ width: string }>`
  width: ${({ width }) => width}%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.light.dark};
  border-radius: 5px;

  @keyframes flash {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: flash;
  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: both;
`;

export function LoadingFeatText() {
  return (
    <Area>
      <Line width="80" />
      <Line width="90" />
      <Line width="70" />
      <Line width="90" />
    </Area>
  );
}
