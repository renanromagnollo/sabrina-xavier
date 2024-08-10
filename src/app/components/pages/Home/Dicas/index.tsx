import { DicasCard } from "@/app/components/Cards/DicasCard";
import { DataContext } from "@/context/data-context";
import { HygraphPostProps } from "@/types/hygraph-types";
import { useContext } from "react";
import styled from "styled-components";

interface DicasProps {}

const SectionArea = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.colors.primary.light};

  hr {
    width: 100%;
    border-color: ${({ theme }) => theme.colors.light.default};
  }
`;
const Container = styled.div`
  /* width: 80%; */
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 60px;
  margin: 40px 0;
`;

const TitleSection = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light.default};
  /* hr {
        width: 100%;
        border-color: ${({ theme }) => theme.colors.light.default};
    } */
  h3 {
    margin: 0 30px;
  }
`;

export function Dicas(props: DicasProps) {
  const { posts } = useContext(DataContext);

  const listDicas = posts?.slice(0, 3);
  return (
    <SectionArea>
      <TitleSection>
        <hr />
        <h2>Dicas</h2>
        <hr />
      </TitleSection>
      <Container>
        {listDicas &&
          listDicas.map((item: HygraphPostProps, i: number) => (
            <DicasCard key={i} item={item} />
          ))}
      </Container>
      <hr />
    </SectionArea>
  );
}
