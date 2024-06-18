import Image from "next/image"
import styled from "styled-components"

interface CardMakeupProps {

}

const CardBox = styled.div`
    /* width: 290px; */
    background-color: ${({theme}) => theme.colors.light.default};
    box-shadow: 2px 2px 7px 2px rgba(0,0,0, .2);

    div {
        padding: 15px;
    }
`
export function CardMakeup(props : CardMakeupProps){
    return(
        <CardBox>
            <div>
                <Image
                    alt='makeup-image'
                    src='http://picsum.photos/290/290'
                    width={290}
                    height={290}
                    style={{objectFit: 'cover'}}
                />
            </div>
        </CardBox>
    )
}