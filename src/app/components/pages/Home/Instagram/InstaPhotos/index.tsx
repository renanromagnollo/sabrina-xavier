import styled from "styled-components"
import { CardInstaPhoto } from "./CardInstaPhoto"

interface InstaPhotosProps {

}

const Container = styled.section`
  width: 80%;
  display: flex;
  gap: 5vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export function InstaPhotos(props : InstaPhotosProps){
    return(
        <Container>
          <CardInstaPhoto/>
          <CardInstaPhoto/>
          <CardInstaPhoto/>
          <CardInstaPhoto/>
          <CardInstaPhoto/>
          <CardInstaPhoto/>
        </Container>
    )
}