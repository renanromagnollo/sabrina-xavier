import { HygraphHomeProps } from "@/types/hygraph-types";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import { X } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";

interface ModalHeroProps {
  data: HygraphHomeProps;
  closeModal: (param: boolean) => void;
}

const ModalArea = styled.div`
  color: ${({ theme }) => theme.colors.primary.dark};
  width: 100%;
  height: 100%;
  /* right: 0; */
  overflow: hidden;
  top: 0;
  left: 0;
  opacity: 0.95;
  position: fixed;
  z-index: 10000;
  display: flex;
  justify-content: center;
  margin-top: 45px;
  /* padding-bottom: 5px; */

  background-color: transparent;
`;

const Container = styled.section`
  position: relative;
  width: 70%;
  color: black;
  background-color: ${({ theme }) => theme.colors.light.default};
  border-radius: 5px;
  /* opacity: 0.9; */
  overflow-y: scroll;
  box-shadow: 0 0 30px 0 ${({ theme }) => theme.colors.primary.light};
  /* overflow: scroll; */
`;

const ContentArea = styled.div`
  width: 100%;
  padding: 50px;
  /* display: flex;
  flex-wrap: wrap; */
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary.dark};
`;

const ImageCard = styled.div`
  width: 200px;
  height: 300px;
  float: left;
  padding: 10px;
  margin-right: 20px;
  /* object-fit: cover; */
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary.light};
  /* transform: rotate(-3deg); */
`;

const CloseBG = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.light};
`;

export function ModalAboutMe({ data, closeModal }: ModalHeroProps) {
  return (
    <ModalArea>
      <X
        onClick={() => closeModal(false)}
        size="50"
        style={{ cursor: "pointer" }}
      />
      <Container>
        <ContentArea>
          <ImageCard>
            <Image
              alt="sabrina-photo"
              src={data.aboutMe.imgAbout.url}
              unoptimized
              width={400}
              height={600}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </ImageCard>
          <Text>
            <RichTextHygraph content={data.aboutMe.textAboutMe.raw} />
          </Text>
        </ContentArea>
      </Container>
    </ModalArea>
  );
}
