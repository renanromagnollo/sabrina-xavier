import Image from "next/image";
import styled from "styled-components";
import { ButtonUnselected } from "../../Buttons/ButtonUnselected";
import Link from "next/link";
import { Hairstyles } from "@/domain";

const BoxCard = styled.div`
  position: relative;
  width: 290px;
  height: 460px;
  opacity: 0;
  animation: loading 1s ease-out forwards;

  @keyframes loading {
    from {
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Content = styled.div`
  background-color: transparent;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  z-index: 10;
  height: 100%;
  padding: 3rem 15px;

  div {
    box-shadow: 2px 1px 5px 2px rgba(0, 0, 0, 0.4);
    border-radius: 5px;

    overflow: hidden;
  }
`;

const Bg = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 80%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light.dark};
  box-shadow: 2px 2px 3px 1px ${({ theme }) => theme.colors.dark.default};
  bottom: 0;
`;

const ImageArea = styled.div`
  width: 250px;
  height: 300px;
  margin-top: -10;
  animation: mount 1s ease-out forwards;

  @keyframes mount {
    from {
      margin-top: -10;
    }
    to {
      margin-top: 0;
    }
  }
`;

const IntroText = styled.h6`
  text-align: center;
`;
export function HairStyleCard({ item }: { item: Hairstyles }) {
  return (
    <BoxCard>
      <Content>
        <ImageArea>
          <Image
            alt="hair-style-image"
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
            src={item.image ?? `http://picsum.photos//250/250`}
          />
        </ImageArea>
        <h4>{item.title ?? "Title"}</h4>
        {/* <h5><RichTextHygraph content={item.text.raw}/></h5> */}
        <IntroText>{item.introText}</IntroText>
        <Link href={`/servicos/${item?.slug}`}>
          <ButtonUnselected>Saiba mais</ButtonUnselected>
        </Link>
      </Content>
      <Bg />
    </BoxCard>
  );
}
