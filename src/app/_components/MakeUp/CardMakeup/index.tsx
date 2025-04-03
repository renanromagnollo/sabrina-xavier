import { Portfolio } from "@/domain"
import { InstagramPostProps } from "@/types/post-instagram-types"
import Image from "next/image"
import { ReactNode } from "react"
import styled from "styled-components"

interface CardMakeupProps {
    post: Portfolio
    rotate?: string
}

interface CardBoxProps {
    rotate: ReactNode
}

const CardBox = styled.div<CardBoxProps>`
    background-color: ${({ theme }) => theme.colors.light.default};
    box-shadow: 2px 2px 7px 2px rgba(0,0,0, .2);
    transform: ${({ rotate }) =>
        rotate ? `rotate(${rotate}deg)` : 'none'
    };
`

const ImageBox = styled.div`
    padding: 15px;

    @media (max-width: 480px) {
        padding: 10px;
        img {
            max-width: 160px;
            max-height: 250px;
        }
    }
    
`
export function CardMakeup({ post, rotate }: CardMakeupProps) {
    return (
        <CardBox rotate={rotate}>
            <ImageBox>
                <Image
                    alt='makeup-image'
                    src={post ? post.image : 'http://picsum.photos/290/290'}
                    width={290}
                    height={290}
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
            </ImageBox>
        </CardBox>
    )
}