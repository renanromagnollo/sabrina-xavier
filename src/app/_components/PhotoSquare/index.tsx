import Image from "next/image";
import styled from "styled-components";

interface ImgBoxProps {
  width: number;
  height: number;
  position?: string;
  rotate?: string;
  zindex?: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

interface PhotoSquareProps extends ImgBoxProps {
  src?: string;
}

const ImgContainer = styled.div<PhotoSquareProps>`
  position: ${(props) => props.position};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  z-index: ${({ zindex }) => zindex};
  writing-mode: vertical-rl;
  transform: rotate(${(props) => props.rotate});
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  /* border: 3px solid ${({ theme }) => theme.colors.primary.default}; */
  padding: 1.2%;
  background-color: ${({ theme }) => theme.colors.light.default};
  box-shadow: 1px 2px 10px 1px ${({ theme }) => theme.colors.primary.default};
  div {
    margin: 5px;
  }
`;

export function PhotoSquare({
  src,
  width,
  height,
  position = "relative",
  zindex = 0,
  rotate,
  top,
  right,
  bottom,
  left,
}: PhotoSquareProps) {
  return (
    <ImgContainer
      width={width}
      height={height}
      position={position}
      rotate={rotate}
      zindex={zindex}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      <Image
        src={src ?? `https://place-hold.it/${width}x${height}`}
        width={width}
        height={height}
        alt="sabrina-picture"
        sizes="100%"
        quality={75}
        style={{ objectFit: "cover" }}
        priority={true}
        unoptimized={false}
      />
    </ImgContainer>
  );
}
