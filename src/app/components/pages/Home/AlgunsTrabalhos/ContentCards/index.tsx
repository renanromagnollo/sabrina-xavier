import { InstagramPostProps } from "@/types/post-instagram-types"
import styled from "styled-components"
import { CardJob } from "../ CardJob"

interface ContentCardsProps {
  posts: InstagramPostProps[]
}

const Container = styled.div`
  /* position: relative; */
  width: 80vw;
  padding: 30px 30px;
  display: flex;
  gap: 100px;
  flex-wrap: nowrap;
  margin-top: 10px;
  justify-content: space-evenly;
  /* overflow: hidden; */
  /* background-color: pink; */
`

export function ContentCards({posts} : ContentCardsProps){

    const galleryPhotos = posts?.filter(post => post.media_type !== 'VIDEO')
    return(
        <Container>
          {galleryPhotos?.map((post, i) => {
            if(post.caption.includes('@')) {
              return <CardJob 
               key={i} 
               src={post.media_url} 
               rotate={''}
               text={post.caption}
               />}
            }       
          )}

        </Container>
    )
}

