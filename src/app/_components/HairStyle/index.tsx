'use client'

import { Hairstyles } from "@/domain";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { useParams } from "next/navigation";
import styled from "styled-components";
import { LoadingCard } from "../Loadings/LoadingCard";
import { TitleSection } from "../TitleSection";
import { HairStyleCard } from "../Cards/HairStyleCard";

const SectionArea = styled.section`
  width: 100%;
  overflow: hidden;
  display: flex;
  padding-top: 30px;
  padding-bottom: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light.default};
  background-color: ${({ theme }) => theme.colors.dark.light};
`;
const ContainerCards = styled.div`
  color: ${({ theme }) => theme.colors.dark.default};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export function HairStyle() {
  const { data: hairstyleServices, isFetching } = useHygraphQuery<Hairstyles[]>("hairstyles");
  const { slug } = useParams();

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
              return <HairStyleCard key={i} item={item} />;
            }
            return;
          })
        )}
      </ContainerCards>
    </SectionArea>
  );
}
