import Image from "next/image"
import styled from "styled-components"

interface CardInstaPhotoProps {

}

const CardBox = styled.div`
  width: 277px;
  height: 277px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .2);
`
export function CardInstaPhoto(props : CardInstaPhotoProps){
    return(
        <CardBox>
          <Image
            src={`http://picsum.photos//277/277`}
            alt="instagram-image"
            width={277}
            height={277}
            sizes="100%"
            style={{objectFit: 'cover'}}
          />
        </CardBox>
    )
}