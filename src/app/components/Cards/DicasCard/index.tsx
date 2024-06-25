import Image from "next/image"
import styled from "styled-components"
import { ButtonTagType } from "../../Buttons/ButtonTagType"
import { HygraphPostProps } from "@/types/hygraph-types"
import { RichTextHygraph } from "@/utils/richtTextHygraph"
import { ButtonUnselected } from "../../Buttons/ButtonUnselected"

interface DicasCardProps {
    item?: HygraphPostProps
}

const CardBox = styled.div`
    width: 290px;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.light.default};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, .4);
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px;
    gap: 10px;
    color: ${({theme}) => theme.colors.primary.dark};
`

const ButtonArea = styled.div`
    height: 100%;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* background-color: pink; */
`


export function DicasCard({item} : DicasCardProps){
    return(
        <CardBox>
            <div>
                <Image
                    width={290}
                    height={215}
                    alt="dica-image"
                    src={item?.image?.url ?? 'http://picsum.photos//290/215'}
                    style={{objectFit: 'cover', width: '100%'}}
                />
            </div>
            <Content>
                <ButtonTagType type='hair'/>
                <h4>{item?.title ?? 'Title'}</h4>
                {/* <h5><RichTextHygraph content={item?.text?.raw}/></h5> */}
            </Content>
            <ButtonArea>
                <ButtonUnselected color={"primary"}>Leia</ButtonUnselected>
            </ButtonArea>
        </CardBox>
    )
}