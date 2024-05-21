import Image from "next/image"
import styled from "styled-components"

interface CardJobProps {
    width?: number
    height?: number
    src?: string
    rotate?: string

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

`

const TextCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    color: ${({theme}) => theme.colors.primary.dark};
`

export function CardJob({width=280, height=310, src, rotate} : CardJobProps){
    return(
        <CardBox rotate={rotate}>
            <ImgCard>
                <Image
                    src={src ?? `http://picsum.photos//${width}/${height}`}
                    width={width}
                    height={height}
                    alt='job-image'
                    sizes="100%"
                    style={{objectFit: 'cover'}}
                    unoptimized
                />
            </ImgCard>
            <TextCard>
                <h5>Trabalho</h5>

            </TextCard>
        </CardBox>
    )
}