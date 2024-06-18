import { InstagramPostProps } from "@/types/post-instagram-types"
import Image from "next/image"
import { ReactNode } from "react"
import styled from "styled-components"

interface CardMakeupProps {
    post: InstagramPostProps
    rotate?: string
}

interface CardBoxProps {
    rotate: ReactNode
}

const CardBox = styled.div<CardBoxProps>`
    /* width: 290px; */
    background-color: ${({theme}) => theme.colors.light.default};
    box-shadow: 2px 2px 7px 2px rgba(0,0,0, .2);
    transform: ${({rotate}) =>
        rotate ? `rotate(${rotate}deg)` : 'none'
    };
`

const ImageBox = styled.div`
    padding: 15px;
    
`
export function CardMakeup({post, rotate} : CardMakeupProps){
    return(
        <CardBox rotate={rotate}>
            <ImageBox>
                <Image
                    alt='makeup-image'
                    src={post ? post.media_url : 'http://picsum.photos/290/290'}
                    width={290}
                    height={290}
                    style={{objectFit: 'cover', objectPosition: 'top'}}
                />
            </ImageBox>
        </CardBox>
    )
}