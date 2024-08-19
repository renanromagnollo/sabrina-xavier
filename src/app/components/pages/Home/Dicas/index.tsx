import { DicasCard } from "@/app/components/Cards/DicasCard";
import { TitleSection } from "@/app/components/TitleSection";
import { DataContext } from "@/context/data-context";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
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
  color: ${({ theme }) => theme.colors.secundary.dark};

  background-color: ${({ theme }) => theme.colors.primary.light};

  hr {
    width: 100%;
    border-color: ${({ theme }) => theme.colors.light.default};
  }
`;
const ContentContainer = styled.div`
  /* width: 80%; */
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 60px;
  margin: 40px 0;
`;

const TitleSectionContainer = styled.div`
  width: 80%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  hr {
    border-color: ${({ theme }) => theme.colors.secundary.light};
  }
`;

export function Dicas(props: DicasProps) {
  // const { posts } = useContext(DataContext);
  const { data } = useHygraphQuery(true, "home");
  const posts = data?.posts;

  const listDicas = posts?.slice(0, 3);
  return (
    <SectionArea>
      <TitleSectionContainer>
        <TitleSection title="Dicas" subtitle="Saiba como se cuidar melhor" />
      </TitleSectionContainer>
      <ContentContainer>
        {listDicas &&
          listDicas.map((item: HygraphPostProps, i: number) => (
            <DicasCard key={i} item={item} />
          ))}
      </ContentContainer>
      <hr />
    </SectionArea>
  );
}
