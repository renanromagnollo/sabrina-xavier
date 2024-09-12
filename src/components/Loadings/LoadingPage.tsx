import styled from "styled-components";

interface LoaderProps {
  color?: "primary" | "secundary" | "dark";
}

const LoaderPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div<LoaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  * {
    color: ${({ theme, color }) => {
      switch (color) {
        case "primary":
          return theme.colors.primary.light;
        case "secundary":
          return theme.colors.secundary.default;
        case "dark":
          return theme.colors.dark.light;
        default:
          return theme.colors.primary.light;
      }
    }};
  }
`;

const Loader = styled.div<LoaderProps>`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background: ${({ theme, color }) => {
    switch (color) {
      case "primary":
        return theme.colors.primary.light;
      case "secundary":
        return theme.colors.secundary.default;
      case "dark":
        return theme.colors.dark.light;
      default:
        return theme.colors.primary.light;
    }
  }};
  box-sizing: border-box;
  animation: flipX 1s linear infinite;

  @keyframes flipX {
    0% {
      transform: perspective(200px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
    }
  }
`;

interface LoadingPageProps {}
export function LoadingPage({ color }: LoaderProps) {
  return (
    <LoaderPage>
      <Content>
        <Loader color={color} />
        <h5>Carregando</h5>
      </Content>
    </LoaderPage>
  );
}
