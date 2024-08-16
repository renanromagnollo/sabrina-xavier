"use client";

import styled from "styled-components";
import { TitleSection } from "../components/TitleSection";

const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.primary.default};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

interface ServicosPageProps {}
export default function ServicosPage(props: ServicosPageProps) {
  return (
    <Container>
      <TitleSection title="Serviços" />
      <h1></h1>
    </Container>
  );
}
