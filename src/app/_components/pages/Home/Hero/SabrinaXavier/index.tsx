import styled from "styled-components";
import { SabrinaPhotos } from "../SabrinaXavier/SabrinaPhotos";
import { SAContent } from "../SabrinaXavier/SAContent";
import { LogoVertical } from "@/app/_components/Logo/LogoVertical";
import { PhotoSquare } from "@/app/_components/PhotoSquare";

interface FeaturedProps { }

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-grow: 2;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
const MobilePhoto = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;
    margin-bottom: 15px;
  }
`;

const MobileLogo = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;
    margin-bottom: 20px;
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
          src="/images/s1.jpg"
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
