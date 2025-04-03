'use client'

import { Post } from "@/domain";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TitleSection } from "../TitleSection";
import { LoadingCircle } from "../Loadings/LoadingCircle";
import { DicasCard } from "../Cards/DicasCard";


const SectionArea = styled.section`
  overflow: hidden;
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
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
  margin: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export function Dicas() {
  const { data: posts, isFetching } = useHygraphQuery<Post[]>("posts", 12);
  const [listDicas, setListDicas] = useState<Post[]>([])
  const { slug } = useParams();


  useEffect(() => {
    if (Array.isArray(posts) && posts.every(item => "slug" in item)) {
      setListDicas(posts.slice(0, 3) as Post[]);
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
          listDicas?.map((item: Post, i: number) => {
            if (item.slug !== slug) return <DicasCard key={i} item={item} />;
            return;
          })
        )}
      </ContentContainer>
      <hr />
    </SectionArea>
  );
}
