import { RichTextHygraph } from "@/utils/richtTextHygraph";
import { slugCreator } from "@/utils/slugCreator";
import Image from "next/image";
import styled from "styled-components";
import { Dicas } from "../../Dicas";
import { usePathname } from "next/navigation";
import { HairStyle } from "../../HairStyle";
import { ButtonContact } from "../../Buttons/ButtonContact/ButtonContact";
import { Post } from "@/domain";
import { useCallback, useEffect } from "react";

const PageArea = styled.div`
  width: 100%;
  display: flex;
`;

const MainArea = styled.main`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  article: Post;
}

export function LayoutArticlePage({
  article,
}: LayoutPostProps) {
  const path = usePathname();


  const othersArticles = useCallback(() => {
    if (path.includes("dicas")) {
      return <Dicas />;
    } else if (path.includes("servicos")) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <ButtonContact>Clique aqui e marque o seu horário</ButtonContact>
          <HairStyle />
        </div>
      );
    }
    return;
  }, [path])

  return (
    <PageArea>
      <MainArea>
        <PostArea>
          <h1>{article?.title}</h1>
          <Image
            src={article?.image}
            alt={`image_${slugCreator(article?.title)}`}
            width={600}
            height={500}
            sizes="full"
            quality={75}
            style={{ objectFit: "contain" }}
          />
          <p>
            <RichTextHygraph content={article?.text} />
          </p>
        </PostArea>
        {othersArticles()}
      </MainArea>
      {/* <RightArea>
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
      </RightArea> */}
    </PageArea>
  );
}
