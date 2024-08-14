"use client";

import { HygraphPostProps } from "@/types/hygraph-types";
import { getFakeData } from "@/utils/fakeServer";
import { fetchHygraphQuery } from "@/utils/fetchHygraphQuery";
import styled from "styled-components";
import { DicasCard } from "../components/Cards/DicasCard";
import { useContext } from "react";
import { DataContext } from "@/context/data-context";
import { TitleSection } from "../components/TitleSection";

interface DicasPageProps {}

const getDicasData = async (fake: boolean): Promise<HygraphPostProps> => {
  const query = `
          query Posts {
              posts {
              typeServices {
                  name
              }
              image {
                  url
              }
              title
              text {
                  raw
              }
              products {
                  id
                  name
                  image {
                  url
                  }
                  introText
                  linkAffiliate
              }
              }
  }
      `;
  if (fake) return getFakeData("hygraphPosts");
  return fetchHygraphQuery(query);
};

const DicasSection = styled.section`
  color: ${({ theme }) => theme.colors.primary.dark};
  /* width: 100%; */
  margin: 50px 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const CardsArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
`;

const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  /* justify-self: center; */
`;

export default function DicasPage() {
  const { posts } = useContext(DataContext);
  console.log(posts);
  return (
    <DicasSection>
      <TitleSection
        title="Dicas"
        subtitle="Veja as melhores dicas para o seu dia-a-dia"
        width="100%"
      />
      <CardsArea>
        <CardsList>
          {posts.map((dica, i) => (
            <DicasCard item={dica} key={i} />
          ))}
        </CardsList>
      </CardsArea>
    </DicasSection>
  );
}
