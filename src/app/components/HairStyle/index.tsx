import { HairStyleCard } from "@/app/components/Cards/HairStyleCard";
import { TitleSection } from "@/app/components/TitleSection";
import { LoadingCard } from "@/components/Loadings/LoadingCard";
import { DataContext } from "@/context/data-context";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { HygraphHairStyleProps, HygraphHomeProps } from "@/types/hygraph-types";
import { useContext } from "react";
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
  const { data: hygraphHome } = useHygraphQuery(true, "home");
  const hairStyleServices: HygraphHairStyleProps[] = hygraphHome?.hairStyles;

  return (
    <SectionArea>
      <TitleSection
        title="Hair Style"
        subtitle="Os melhores tratamentos para o seu cabelo"
      />
      <ContainerCards>
        {!hairStyleServices ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          hairStyleServices?.map((item: HygraphHairStyleProps, i: number) => (
            <HairStyleCard key={i} item={item} />
          ))
        )}
      </ContainerCards>
    </SectionArea>
  );
}
