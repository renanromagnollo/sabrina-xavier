import styled from "styled-components";

interface TitleAreaProps {
  width?: string;
}
interface TitleSectionProps extends TitleAreaProps {
  title: string;
  subtitle?: string;
}

const TitleArea = styled.div<TitleAreaProps>`
  width: ${({ width }) => width};
`;

const Title = styled.h2`
  color: inherit;
`;

const Line = styled.hr`
  border-color: inherit;
`;

const Subtitle = styled.h4`
  color: inherit;
  display: flex;
  justify-content: flex-end;
`;
export function TitleSection({
  title,
  subtitle,
  width = "90%",
}: TitleSectionProps) {
  return (
    <TitleArea width={width}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          margin: "0 20px",
        }}
      >
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <Line />
    </TitleArea>
  );
}
