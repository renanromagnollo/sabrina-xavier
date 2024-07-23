import { PhotoSquare } from "@/components/PhotoSquare";
import Image from "next/image";
import styled from "styled-components";

interface SabrinaPhotosProps {}

const PhotosContainer = styled.div`
  width: 50%;
  display: block;
  position: relative;
  padding: 0 10px;
  flex-grow: 1;
  /* background-color: darkred; */

  @media (max-width: 1020px) {
    margin-right: 30px;
  }
  @media (max-width: 800px) {
    width: 60%;
    margin-right: 70px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export function SabrinaPhotos(props: SabrinaPhotosProps) {
  return (
    <PhotosContainer>
      <PhotoSquare
        src="/images/s1.jpg"
        width={370}
        height={447}
        position="absolute"
        rotate="2deg"
        left={"30px"}
      />
      <PhotoSquare
        src="/images/s2.jpg"
        width={173}
        height={210}
        position="absolute"
        right={"-10px"}
        bottom={"10px"}
        zindex={2}
        rotate="5deg"
      />
      <PhotoSquare
        src="/images/s3.jpg"
        width={155}
        height={188}
        position="absolute"
        right={"120px"}
        bottom={"-45px"}
        zindex={2}
        rotate="-15deg"
      />
    </PhotosContainer>
  );
}
