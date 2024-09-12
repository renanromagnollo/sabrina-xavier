import Image from "next/image";
import styled from "styled-components";

interface PhotoSquareProps {}
interface ImgBox {
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
interface PhotoSquareProps extends ImgBox {
  src?: string;
}
const ImgBox = styled.div<PhotoSquareProps>`
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
    <ImgBox
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
        style={{ objectFit: "cover" }}
        priority={true}
        unoptimized
      />
    </ImgBox>
  );
}
