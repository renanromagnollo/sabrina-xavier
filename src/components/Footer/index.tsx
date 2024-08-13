"use client";

import styled from "styled-components";
import { LogoRenanRomagnollo } from "../Logo/RenanRomagnollo";

interface FooterProps {}

const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 40px;
  color: ${({ theme }) => theme.colors.light.default};
  background-color: ${({ theme }) => theme.colors.dark.default};
`;

const Copyright = styled.h6`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-self: center;
  align-items: baseline;
  gap: 5px;
`;

const Renan = styled.div`
  width: 40px;
  overflow: hidden;
  position: absolute;
  right: 50px;
  transition: width 0.5s ease-in-out;

  &:hover {
    width: 300px;
  }
`;
export function Footer(props: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <FooterSection>
      <Copyright>© {year}</Copyright>
      <Renan>
        <LogoRenanRomagnollo />
      </Renan>
    </FooterSection>
  );
}
