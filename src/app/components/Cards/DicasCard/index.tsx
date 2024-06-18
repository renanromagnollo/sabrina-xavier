import Image from "next/image"
import styled from "styled-components"
import { ButtonTagType } from "../../Buttons/ButtonTagType"

interface DicasCardProps {
    imgUrl?: string
    tags?: string
    title?: string
    text?: string
}

const CardBox = styled.div`
    width: 290px;
    /* height: 400px; */
    overflow: hidden;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.light.default};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, .4);
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 10px;
    gap: 10px;
`
export function DicasCard(props : DicasCardProps){
    return(
        <CardBox>
            <div>
                <Image
                    width={290}
                    height={215}
                    alt="dica-image"
                    src={'http://picsum.photos//290/215'}
                    style={{objectFit: 'cover'}}
                />
            </div>
            <Content>
                <ButtonTagType type="make"/>
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quos, fugiat deleniti reprehenderit labore ratione!</h5>
            </Content>
        </CardBox>
    )
}