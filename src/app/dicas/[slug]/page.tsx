"use client";

import { DicasCard } from "@/app/components/Cards/DicasCard";
import { ProductCard } from "@/app/components/Cards/ProductCard";
import { Products } from "@/app/components/Products";
import { Dicas } from "@/app/components/pages/Home/Dicas";
import { DataContext } from "@/context/data-context";
import { HygraphPostProps, HygraphProductProps } from "@/types/hygraph-types";
import { getFakeData } from "@/utils/fakeServer";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import { slugCreator } from "@/utils/slugCreator";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const PageArea = styled.div`
  width: 100%;
  display: flex;
`;

const MainArea = styled.main`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* background-color: blue; */
`;

const RightArea = styled.section`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  /* background-color: purple; */
`;

const ProductsArea = styled.div`
  width: 100%;
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
  padding: 40px;
  top: 20px;
  background-color: ${({ theme }) => theme.colors.secundary.light};

  /* h4 {
        color: ${({ theme }) => theme.colors.secundary.dark};
        border: 2px solid ${({ theme }) => theme.colors.secundary.default};
        padding: 10px;
    } */
`;

const AreaTitle = styled.h4`
  color: ${({ theme }) => theme.colors.secundary.dark};
  border: 2px solid ${({ theme }) => theme.colors.secundary.default};
  padding: 10px;
`;

const PostArea = styled.section`
  width: 80%;
  /* padding: 10px 5vw; */
  color: ${({ theme }) => theme.colors.primary.dark};
  /* background-color: purple; */

  h1 {
    line-height: 80px;
  }

  p {
    text-align: justify;
  }

  img {
    width: 100%;
    display: flex;
    justify-self: center;
    margin: 30px 0;
    /* align-self: center; */
  }
`;
interface DicaPageProps {
  params: {
    slug: string;
  };
}

export default function DicaPage({ params }: DicaPageProps) {
  const {} = useContext(DataContext)
  const [selectedPost, setSelectedPost] = useState<HygraphPostProps>();
  const [relatedProducts, setRelatedProducts] =
    useState<HygraphProductProps[]>();

  useEffect(() => {
    function verifySlug(content) {
      const slug = slugCreator(content?.title);
      return slug === params.slug;
    }

    const getPosts = async () => {
      const { posts } = await getFakeData("hygraphPosts");
      const selected: HygraphPostProps = posts.filter((post) =>
        verifySlug(post)
      )[0];
      console.log(selected.products);
      if (selected) {
        setSelectedPost(selected);
        setRelatedProducts(selected.products);
      }
    };
    getPosts();
  }, []);

  return (
    selectedPost && (
      <PageArea>
        <MainArea>
          <PostArea>
            <Image
              src={selectedPost.image.url}
              alt={`image_${slugCreator(selectedPost.title)}`}
              width={600}
              height={500}
              style={{ objectFit: "contain" }}
            />
            <h1>{selectedPost.title}</h1>
            <p>
              <RichTextHygraph content={selectedPost.text.raw} />
            </p>
          </PostArea>
          <Dicas />
        </MainArea>
        <RightArea>
          {relatedProducts && relatedProducts.length > 0 && (
            <ProductsArea>
              <AreaTitle>
                {relatedProducts.length > 1
                  ? "Produtos Recomendados"
                  : "Produto Recomendado"}
              </AreaTitle>
              {relatedProducts?.map((product, i) => (
                <ProductCard key={i} item={product} />
              ))}
            </ProductsArea>
          )}
        </RightArea>
      </PageArea>
    )
  );
}
