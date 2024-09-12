"use client";

import styled from "styled-components";
import { TitleSection } from "../components/TitleSection";
import { HairStyle } from "../components/HairStyle";
import { MakeUp } from "../components/MakeUp";
import { Address } from "@/components/Address";

const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.primary.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  width: 100vw;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  > h5 {
    padding-left: 20px;
  }
`;

interface ServicosPageProps {}
export default function ServicosPage(props: ServicosPageProps) {
  return (
    <Container>
      <Header>
        <TitleSection title="Serviços" width="inherit" />
        <h5>Veja quais são os serviços que fazemos e marque o seu horário</h5>
      </Header>
      <HairStyle />
      <MakeUp />
    </Container>
  );
}
