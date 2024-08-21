import { RichTextHygraph } from "@/utils/richtTextHygraph";
import { slugCreator } from "@/utils/slugCreator";
import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";
import { Dicas } from "../Home/Dicas";
import { ProductCard } from "../../Cards/ProductCard";

const PageArea = styled.div`
  width: 100%;
  display: flex;
`;

const MainArea = styled.main`
  /* width: 100%; */
  margin-top: 40px;
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
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
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

interface LayoutPostProps {
  post: any;
  relatedProducts?: any;
}

export function LayoutPagePost({ post, relatedProducts }: LayoutPostProps) {
  return (
    <PageArea>
      <MainArea>
        <PostArea>
          <h1>{post?.title}</h1>
          <Image
            src={post?.image.url}
            alt={`image_${slugCreator(post?.title)}`}
            width={600}
            height={500}
            style={{ objectFit: "contain" }}
          />
          <p>
            <RichTextHygraph content={post?.text.raw} />
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
  );
}
