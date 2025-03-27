"use client";

import styled from "styled-components";

interface TitleAreaProps {
  width?: string;
}
interface TitleSectionProps extends TitleAreaProps {
  title: string;
  subtitle?: string;
}

const Content = styled.div`
  display: "flex";
  justify-content: "space-between";
  align-items: "baseline";
  margin: "0 20px";

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`

const TitleArea = styled.div<TitleAreaProps>`
  width: ${({ width }) => width};
  
  @media (max-width: 1000px) {
    /* width: 100%; */
    text-align: center;
    /* margin-right: 10px; */
  }

`;

const Title = styled.h2`
  color: inherit;

  /* @media (max-width: 480px) {
    margin-right: 10px;
  } */
`;

const Line = styled.hr`
  border-color: inherit;
`;

const Subtitle = styled.h4`
  color: inherit;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 480px) {
    text-align: center;
  }
`;


export function TitleSection({
  title,
  subtitle,
  width = "90%",
}: TitleSectionProps) {
  return (
    <TitleArea width={width}>
      <Content>
        <Title data-aos="fade-right">{title}</Title>
        <Subtitle data-aos="fade-left">{subtitle}</Subtitle>
      </Content>
      <Line data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" />
    </TitleArea>
  );
}
