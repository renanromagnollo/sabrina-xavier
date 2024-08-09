import { HairStyleCard } from "@/app/components/Cards/HairStyleCard";
import { LoadingCard } from "@/components/Loadings/LoadingCard";
import { DataContext } from "@/context/data-context";
import { HygraphHairStyleProps, HygraphHomeProps } from "@/types/hygraph-types";
import { useContext } from "react";
import styled from "styled-components";

const SectionArea = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.dark};
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
  const { hygraphHome } = useContext(DataContext);
  // console.log(hygraphHome.hairStyles)

  const hairStyleServices: HygraphHairStyleProps[] = hygraphHome.hairStyles;
  return (
    <SectionArea>
      <h2>Hair Style</h2>
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
