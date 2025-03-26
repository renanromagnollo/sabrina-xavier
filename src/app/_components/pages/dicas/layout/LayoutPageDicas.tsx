"use client";

import styled from "styled-components";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { LoadingPage } from "@/app/_components/Loadings/LoadingPage";
import { TitleSection } from "@/app/_components/TitleSection";
import { DicasCard } from "@/app/_components/Cards/DicasCard";
import { Post } from "@/domain";

const PageArea = styled.div`
  color: ${({ theme }) => theme.colors.primary.dark};
  margin: 10px 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
`;

const DicasSection = styled.section`
  color: inherit;
  
`;

const CardsArea = styled.div`
  color: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const CardsList = styled.div`
  color: inherit;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

export function LayoutPageDicas() {
  const { data: posts, isFetching } = useHygraphQuery("posts");
  return isFetching ? (
    <LoadingPage />
  ) : (
    <PageArea>
      <TitleSection
        title="Dicas"
        subtitle="Veja as melhores dicas para o seu dia-a-dia"
        width="100%"
      />
      <DicasSection>
        <CardsArea>
          <CardsList>
            {posts?.map((dica: Post, i: number) => (
              <DicasCard item={dica} key={i} />
            ))}
          </CardsList>
        </CardsArea>
      </DicasSection>
    </PageArea>
  );
}
