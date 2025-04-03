import Image from "next/image";
import styled from "styled-components";
import { ButtonUnselected } from "../../Buttons/ButtonUnselected";
import { ButtonBuy } from "../../Buttons/ButtonBuy";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import { Product } from "@/domain";

interface HairProductCardProps {
  item?: Product;
}

const BoxCard = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.colors.secundary.dark};

  border-radius: 25px;
  overflow: hidden;
`;

const FeatureProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 10px auto;
`;

const ProductImage = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleArea = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.secundary.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
`;

const Title = styled.h5`
  color: ${({ theme }) => theme.colors.light.default};
  text-align: center;
`;

const TextArea = styled.div`
  padding: 10px;
  width: 100%;
  overflow: hidden;
`;

const Text = styled.h6`
  color: ${({ theme }) => theme.colors.secundary.dark};
  width: 100%;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
`;

const DescriptionArea = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export function ProductCard({ item }: HairProductCardProps) {
  return (
    <BoxCard>
      <FeatureProduct>
        <ProductImage>
          <Image
            alt="product-image"
            width={300}
            height={250}
            src={item?.image ?? "http://picsum.photos//290/450"}
            style={{ objectFit: "contain" }}
          />
        </ProductImage>
        <TitleArea>
          <Title>{item?.name ?? "TitleArea"}</Title>
        </TitleArea>
      </FeatureProduct>
      <DescriptionArea>
        <TextArea>
          <Text>{item?.introText ?? "Intro Text"}</Text>
        </TextArea>
        <Buttons>
          <ButtonUnselected color="secundary">Saiba mais</ButtonUnselected>
          <ButtonBuy link={item?.linkAffiliate} />
        </Buttons>
      </DescriptionArea>
    </BoxCard>
  );
}
