import { HygraphHairStyleProps } from "@/types/hygraph-types";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import Image from "next/image";
import styled from "styled-components";

interface HairStyleCardProps {
  item: HygraphHairStyleProps;
}

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
  background-color: ${({ theme }) => theme.colors.light.dark};
  bottom: 0;
`;

const ImageArea = styled.div`
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
export function HairStyleCard({ item }: HairStyleCardProps) {
  return (
    <BoxCard>
      <Content>
        <ImageArea>
          <Image
            alt="hair-style-image"
            width={250}
            height={250}
            style={{ objectFit: "cover" }}
            src={item.image.url ?? `http://picsum.photos//250/250`}
          />
        </ImageArea>
        <h3>{item.title ?? "Title"}</h3>
        {/* <h5><RichTextHygraph content={item.text.raw}/></h5> */}
        <h5>{item.introText}</h5>
        <button>Saiba mais</button>
      </Content>
      <Bg />
    </BoxCard>
  );
}
