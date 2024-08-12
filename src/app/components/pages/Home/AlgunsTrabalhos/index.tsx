"use client";

import styled from "styled-components";
import { CardJob } from "./ CardJob";
import { ArrowRounded } from "@/components/Icons/ArrowRounded";
import { useContext, useEffect } from "react";
import { DataContext } from "@/context/data-context";
import { InstagramPostProps } from "@/types/post-instagram-types";
import { getFakeData } from "@/utils/fakeServer";
import { ContentCards } from "./ContentCards";
import { Carrousel } from "@/components/Carrousel";
import { LoadingCircle } from "@/components/Loadings/LoadingCircle";
import { TitleSection } from "@/app/components/TitleSection";

interface AlgunsTrabalhosProps {}

const ContainerTrabalhos = styled.section`
  width: 100vw;
  /* height: 50vh; */
  position: relative;
  padding: 30px 0;
  margin: 20px 0;
  /* overflow: hidden; */
  background-color: ${({ theme }) => theme.colors.dark.light};
`;
const BGContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary.light};
`;

const ContentJobs = styled.div`
  position: relative;
  /* background-color: blue; */
  /* display: flex; */
  /* justify-content: center; */
  width: 100vw;
  height: 100%;
  margin-top: 10px;
  /* top: 0; */
  z-index: 20;
  background-color: transparent;
  /* width: 100%; */
`;

const TitleContainer = styled.div`
  width: 100%;
  /* margin: 0 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export function AlgunsTrabalhos(props: AlgunsTrabalhosProps) {
  const rotate = ["-4deg", "3deg", "-6deg"];

  const { instagramPosts } = useContext(DataContext);
  // const instagramPosts = [];

  useEffect(() => {
    console.log("posts uped: ", instagramPosts);
  }, [instagramPosts]);

  return (
    <ContainerTrabalhos>
      <BGContainer />

      <ContentJobs>
        <TitleContainer>
          <TitleSection
            title="Alguns Trabalhos"
            subtitle="Veja o resultado de alguns trabalhos realizados"
          />
        </TitleContainer>
        {instagramPosts.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              zIndex: 20000,
            }}
          >
            <LoadingCircle />
          </div>
        ) : (
          <Carrousel posts={instagramPosts} />
        )}
      </ContentJobs>
    </ContainerTrabalhos>
  );
}
