import { IconBuy } from "@/components/Icons/IconBuy"
import styled from "styled-components"

interface ButtonBuyProps {
    children?: string
}

const ButtonBox = styled.button`
    width: 60px;
    height: 50px;
    background-color: ${({theme}) => theme.colors.actions.sucess};
    color: ${({theme}) => theme.colors.light.default};
    border: 2px solid ${({theme}) => theme.colors.actions.sucess};
    border-radius: 5px;
`

export function ButtonBuy(props : ButtonBuyProps){
    return(
        <ButtonBox>
            {props.children ?? ''}
            <IconBuy/>
        </ButtonBox>
    )
}