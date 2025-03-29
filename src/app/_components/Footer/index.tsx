"use client";

import styled from "styled-components";
import { LogoRenanRomagnollo } from "../Logo/RenanRomagnollo";
import { Logotipo } from "../Logo/Logotipo";

interface FooterProps { }

const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.colors.primary.default};
  background-color: ${({ theme }) => theme.colors.dark.default};
`;

const CopyrightArea = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    left: 10px;
    transform: none;
  }
`;

const Copyright = styled.h6`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  justify-self: center;
  align-items: baseline;
  gap: 5px;
`;

const Renan = styled.div`
  width: 30px;
  overflow: hidden;
  position: absolute;
  right: 50px;
  transition: all 1s ease-in-out;
  opacity: 0.8;
  filter: saturate(0);

  &:hover {
    width: 250px;
    opacity: 1;
    filter: saturate(100%);
  }
`;
export function Footer(props: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <FooterSection>
      <CopyrightArea>
        <Copyright>© {year} - </Copyright>
        <Logotipo size={30} />
      </CopyrightArea>
      <Renan>
        {/* <h6>Desenvolvido por</h6> */}
        <LogoRenanRomagnollo height="25px" />
      </Renan>
    </FooterSection>
  );
}
