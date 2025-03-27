import styled from "styled-components";
import { SabrinaPhotos } from "../SabrinaXavier/SabrinaPhotos";
import { SAContent } from "../SabrinaXavier/SAContent";
import { LogoVertical } from "@/app/_components/Logo/LogoVertical";
import { PhotoSquare } from "@/app/_components/PhotoSquare";

interface FeaturedProps { }

const Container = styled.div`
  width: 70%;
  /* height: auto; */
  display: flex;
  flex-grow: 2;
  
  @media (max-width: 768px) {
    width: 100%;
    /* height: auto; */
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* flex-grow: 1; */
  }
`;
const MobilePhoto = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 15px;
  }
`;

const MobileLogo = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 25px;
  }
`;

export function SabrinaXavier(props: FeaturedProps) {
  return (
    <Container>
      <MobileLogo>
        <LogoVertical />
      </MobileLogo>
      <MobilePhoto>
        <PhotoSquare
          src="/images/s1.png"
          width={170}
          height={247}
          rotate="2deg"
        />
      </MobilePhoto>
      <SAContent />
      <SabrinaPhotos />
    </Container>
  );
}
