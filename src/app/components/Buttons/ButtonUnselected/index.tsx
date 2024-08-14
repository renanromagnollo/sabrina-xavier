import { ComponentProps, ReactNode } from "react";
import styled from "styled-components";

interface ButtonUnselectedProps extends ComponentProps<"button"> {
  width?: string;
  link?: string;
  children?: ReactNode;
  color?: "primary" | "secundary" | "dark";
}

interface ButtonCSSProps {
  width?: string;
  color?: "primary" | "secundary" | "dark" | "inherit";
}

const ButtonBox = styled.button<ButtonCSSProps>`
  --color: ${(props) => {
    switch (props.color) {
      case "primary":
        return props.theme.colors.primary.default;
      case "secundary":
        return props.theme.colors.secundary.dark;
      case "dark":
        return props.theme.colors.dark.light;
      case "inherit":
        return "inherit";
      default:
        return props.theme.colors.dark.light;
    }
  }};
  width: ${(props) => props.width};
  height: 30px;
  color: var(--color);
  padding: 5px;
  border: 2px solid var(--color);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--color);
    color: ${({ theme }) => theme.colors.light.default};
  }
`;

export function ButtonUnselected(props: ButtonUnselectedProps) {
  return (
    <ButtonBox
      width={props.width ?? "100px"}
      color={props.color ?? "inherit"}
      {...props}
    >
      {props.children ?? "Read more"}
    </ButtonBox>
  );
}
