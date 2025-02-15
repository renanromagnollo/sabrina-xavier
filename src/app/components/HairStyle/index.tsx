'use client'

import { HairStyleCard } from "@/app/components/Cards/HairStyleCard";
import { TitleSection } from "@/app/components/TitleSection";
import { LoadingCard } from "@/components/Loadings/LoadingCard";
import { Hairstyles } from "@/domain";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { TRawHygraphHairStyle, THygraphHome } from "@/types/hygraph-types";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import styled from "styled-components";

const SectionArea = styled.section`
  width: 100vw;
  display: flex;
  padding-top: 30px;
  padding-bottom: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light.default};
  background-color: ${({ theme }) => theme.colors.dark.light};
  /* justify-content: center; */
`;
const ContainerCards = styled.div`
  color: ${({ theme }) => theme.colors.dark.default};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export function HairStyle() {
  // const { data: hygraphHome } = useHygraphQuery(true, "home");
  const { data: hairstyleServices, isFetching } = useHygraphQuery("hairstyles");
  const { slug } = useParams();
  // const hairstyleServices: TRawHygraphHairStyle[] = hygraphHome?.hairstyles;
  useEffect(() => {
    console.log(hairstyleServices)
  }, [hairstyleServices])

  return (
    <SectionArea>
      <TitleSection
        title="Hair Style"
        subtitle="Os melhores tratamentos para o seu cabelo"
      />
      <ContainerCards>
        {isFetching ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          hairstyleServices?.map((item: Hairstyles, i: number) => {
            if (item.slug !== slug) {
              return <HairStyleCard item={item} />;
            }
            return;
          })
        )}
      </ContainerCards>
    </SectionArea>
  );
}
