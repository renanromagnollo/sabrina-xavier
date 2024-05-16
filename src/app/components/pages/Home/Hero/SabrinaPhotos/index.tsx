import Image from "next/image"
import styled from "styled-components"

interface SabrinaPhotosProps {

}

const PhotosContainer = styled.div`
  width: 50%;
  display: block;
  position: relative;
  padding: 0 10px;
  flex-grow: 1;
  /* background-color: purple; */
`

interface ImgBox {
  width: number
  height: number
  rotate?: string
  zindex?: number
  top?: string
  right?: string
  bottom?: string
  left?: string
  
}
interface PhotoSquareProps extends ImgBox {
  src?: string
  
}
const ImgBox = styled.div<PhotoSquareProps>`
  position: absolute;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  z-index: ${({zindex}) => zindex};
  writing-mode: vertical-rl;
  transform: rotate(${props => props.rotate});
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  border: 4px solid ${({theme}) => theme.colors.primary.default};
  div {
    margin: 5px;
  }

`

function PhotoSquare({src, width, height, zindex=0, rotate, top, right, bottom, left}: PhotoSquareProps) {
  return (
    <ImgBox 
      width={width}
      height={height}
      rotate={rotate} 
      zindex={zindex} 
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      <Image 
        src={src ?? `https://place-hold.it/${width}x${height}`}
        width={width}
        height={height}
        alt="sabrina-picture"
        sizes="100%"
        style={{objectFit: 'cover'}}
        unoptimized
      />    
    </ImgBox>
  )
}
export function SabrinaPhotos(props : SabrinaPhotosProps){
    return(
      <PhotosContainer>
        <PhotoSquare src="/images/s1.jpg" width={370} height={447} rotate="2deg" left={'30px'}/>
        <PhotoSquare src="/images/s2.jpg" width={173} height={210} right={'-50px'} bottom={'40px'} zindex={1} rotate="5deg"/>
        <PhotoSquare src="/images/s3.jpg" width={155} height={188} right={'90px'} bottom={'5px'} zindex={2} rotate="-15deg"/>
    </PhotosContainer>
    )
}