'use client'

import { DicasCard } from "@/app/components/Cards/DicasCard";
import { TitleSection } from "@/app/components/TitleSection";
import { LoadingCircle } from "@/components/Loadings/LoadingCircle";
import { Post } from "@/domain";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { TRawHygraphPost } from "@/types/hygraph-types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";


const SectionArea = styled.section`
  width: 100%;
  height: 100%;
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

export function Dicas() {
  // const { posts } = useContext(DataContext);
  // const { data } = useHygraphQuery(true, "home");
  const { data: posts, isFetching } = useHygraphQuery("posts", 12);
  const [listDicas, setListDicas] = useState([])
  const { slug } = useParams();
  // const posts = data?.posts;

  useEffect(() => {
    console.log(posts)
    if (posts) {
      setListDicas(posts.slice(0, 3))
    }
  }, [posts])

  return (
    <SectionArea>
      <TitleSectionContainer>
        <TitleSection title="Dicas" subtitle="Saiba como se cuidar melhor" />
      </TitleSectionContainer>
      <ContentContainer>
        {isFetching ? (
          <LoadingCircle />
        ) : (
          listDicas?.map((item: TRawHygraphPost, i: number) => {
            if (item.slug !== slug) return <DicasCard key={i} item={item} />;
            return;
          })
        )}
      </ContentContainer>
      <hr />
    </SectionArea>
  );
}
