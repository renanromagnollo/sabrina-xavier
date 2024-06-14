import { InstagramPostProps } from "@/types/post-instagram-types"
import styled from "styled-components"
import { CardJob } from "../ CardJob"
import { useState } from "react"
import { ModalInsta } from "@/app/components/ModalInsta"

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
  const [modalOpened, setModalOpened] = useState(false)
  const [clickedImage, setClickedImage] = useState<InstagramPostProps>()

  function showOnModal(post: InstagramPostProps) {
    setClickedImage(post)
    setModalOpened(true)
  }

    const galleryPhotos = posts?.filter(post => post.media_type !== 'VIDEO')
    return(
      <>
        <ModalInsta 
          key={clickedImage?.id}
          isOpen={modalOpened}  
          post={clickedImage}
          closeModal={close => setModalOpened(close)}
        />
      <Container>
          {galleryPhotos?.map((post, i) => {
            if(post.caption.includes('@')) {
              return (
                <CardJob
                  clicked={post => showOnModal(post)} 
                  key={i}
                  rotate={''}
                  post={post}
                />)
            }
          })}
        </Container>
      
      </>
    )
}

