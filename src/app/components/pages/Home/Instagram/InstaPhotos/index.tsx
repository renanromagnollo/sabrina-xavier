import styled from "styled-components";
import { CardInstaPhoto } from "./CardInstaPhoto";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/data-context";
import { InstagramPostProps } from "@/types/post-instagram-types";
import { filterInstagramVideos } from "@/utils/filterInstagramVideos";
import { useInstagramQuery } from "@/hooks/useInstagramQuery";

const Container = styled.section`
  width: 80%;
  display: flex;
  gap: 5vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export function InstaPhotos() {
  // const {instagramPosts} = useContext(DataContext)
  const { data: instagramPosts } = useInstagramQuery();
  const [instagramVideos, setInstagramVideos] = useState<InstagramPostProps[]>(
    []
  );
  const [selectedVideos, setSelectedVideos] = useState<InstagramPostProps[]>(
    []
  );

  function selectingVideos(
    videos: InstagramPostProps[],
    count = 6
  ): InstagramPostProps[] {
    const videosReceived = videos;
    console.log(videos);
    let videosList = [];
    for (let c = 0; c === count; c++) {
      videosList.push(videos[c]);
    }
    return videosList;
  }

  useEffect(() => {
    const filteredVideos = filterInstagramVideos(instagramPosts);
    console.log(filteredVideos);
    if (filteredVideos) setInstagramVideos(filteredVideos);
  }, [instagramPosts]);

  useEffect(() => {
    console.log(instagramVideos);
    const videosToShow = selectingVideos(instagramVideos);
    console.log(videosToShow);
    if (videosToShow) setSelectedVideos(videosToShow);
  }, [instagramVideos]);

  return (
    <Container>
      {instagramVideos?.slice(0, 6).map((post) => (
        <CardInstaPhoto key={post.id} post={post} />
      ))}
    </Container>
  );
}
