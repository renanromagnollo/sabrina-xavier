import Image from "next/image"
import styled from "styled-components"
import {cleanText} from '../../../../../../utils/cleanText'
import { InstagramPostProps } from "@/types/post-instagram-types"

interface CardJobProps {
    width?: number
    height?: number
    // src?: string
    rotate?: string
    post: InstagramPostProps
    // text?: string
    clicked: (post: InstagramPostProps) => void

}

interface CardBoxProps {
    rotate?: string
}

const CardBox = styled.div<CardBoxProps>`
    width: 290px;
    height: 370px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    transform: rotate(${props => props.rotate});
    justify-content: flex-start;
    align-items: center;
    /* border: 3px solid ${({theme}) => theme.colors.primary.default}; */
    background-color: ${({theme}) => theme.colors.light.default};
    box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2);
`
const ImgCard = styled.div`
    width: 100%;
    height: 85%;
    /* margin: 10px; */
    /* flex-grow: 2; */
    overflow: hidden;
    writing-mode: vertical-rl;
    /* img {
        image-resolution: from-image;

    } */
    /* image-resolution: 300dpi;
    image-resolution: from-image 300dpi;
    image-resolution: 300dpi snap; */

`

const TextCard = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: flex-start; */
    /* align-items: flex-start; */
    padding: 10px;
    width: 100%;
    height: 25%;
    color: ${({theme}) => theme.colors.primary.dark};
    /* background-color: blue; */
    h5 {
        width: 100%;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        text-align: center;
        
        /* white-space: nowrap; */
        /* text-overflow: ellipsis; */
    }

`

export function CardJob({width=280, height=310, rotate, post, clicked} : CardJobProps){
    // console.log('src: ', src)
    // const wordsOfText = text?.split(' ')
    // console.log(wordsOfText?.filter(word => word.includes('@')))
    // const clientInstagram = wordsOfText?.filter(word => word.includes('@'))
    const clientInstagram = post.caption?.match(/@[\.a-z0-9_-]{2,}/g)
    // const regexHashsNArrobas = /(@[\.a-z0-9_-]{2,})|(#.\S{2,})/g
    // console.log(filteringHashsNArrobas)
    const cleanedText = cleanText(post.caption)
    return( post &&
        <CardBox rotate={rotate} onClick={() => clicked(post)}>
            
            <ImgCard>

                <Image
                    src={post.media_url ?? `http://picsum.photos//${width}/${height}`}
                    width={width}
                    height={height}
                    alt='job-image'
                    // sizes="100%"
                    style={{objectFit: 'cover', objectPosition: 'top'}}
                    // quality={100}
                    // unoptimized
                    // priority
                />
            </ImgCard>
            <TextCard>
                <h5>{cleanedText}</h5>
            </TextCard>
            <h6>{clientInstagram ?? clientInstagram}</h6>
        </CardBox>
    )
}