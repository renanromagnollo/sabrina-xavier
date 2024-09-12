"use client";

import { HygraphPostProps } from "@/types/hygraph-types";
import { getFakeData } from "@/utils/fakeServer";
import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "@/context/data-context";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { LoadingPage } from "@/components/Loadings/LoadingPage";
import { TitleSection } from "@/app/components/TitleSection";
import { DicasCard } from "@/app/components/Cards/DicasCard";

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
  /* width: 100%; */
  /* align-items: center; */
`;

const CardsArea = styled.div`
  color: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
`;

const CardsList = styled.div`
  color: inherit;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  /* justify-self: center; */
`;

export function LayoutPageDicas() {
  const { data: posts, isFetching } = useHygraphQuery(true, "posts");
  // const posts = data?.posts;
  console.log(posts);
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
            {posts?.map((dica, i) => (
              <DicasCard item={dica} key={i} />
            ))}
          </CardsList>
        </CardsArea>
      </DicasSection>
      {/* <Products /> */}
    </PageArea>
  );
}
