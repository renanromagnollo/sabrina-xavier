import Image from "next/image";
import styled from "styled-components";
import { cleanText, extractHygraphRichText } from "@/utils";
import { Portfolio } from "@/domain";

interface CardJobProps {
  width?: number;
  height?: number;
  item: Portfolio;
  clicked: (item: Portfolio) => void;
}

interface CardBoxProps {
  rotate?: string;
}

const CardBox = styled.div<CardBoxProps>`
  min-width: 290px;
  height: 370px;
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.default};
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ImgCard = styled.div`
  width: 100%;
  height: 85%;
  overflow: hidden;
  writing-mode: vertical-rl;
`;

const TextCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 25%;
  color: ${({ theme }) => theme.colors.primary.dark};
  h2 {
    font-size: 2.6rem;
    line-height: 100%;
    font-weight: 200;
    width: 100%;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    text-align: center;
  }
`;

const Instagram = styled.h6`
  color: ${({ theme }) => theme.colors.primary.default};
`;

export function CardJob({
  width = 280,
  height = 310,
  item,
  clicked,
}: CardJobProps) {
  const richtextExtracted = extractHygraphRichText(item.text)
  const cleanedText = cleanText(richtextExtracted);
  const instagramProfiles = cleanedText.match(/@[\.a-z0-9_-]{2,}/g);
  const oneProfile = instagramProfiles ? instagramProfiles[0] : ''
  return (
    item && (
      <CardBox onClick={() => clicked(item)}>
        <ImgCard>
          <Image
            src={item.image ?? `http://picsum.photos//${width}/${height}`}
            width={width}
            height={height}
            alt="job-image"
            sizes="fill"
            style={{ objectFit: "cover", objectPosition: "top" }}
            quality={90}
          />
        </ImgCard>
        <TextCard>
          <h2>{cleanedText}</h2>
        </TextCard>
        <Instagram>{oneProfile}</Instagram>
      </CardBox>
    )
  );
}


