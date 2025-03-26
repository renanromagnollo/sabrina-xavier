import styled from "styled-components"
import { IconBuy } from "../../Icons/IconBuy"

interface ButtonBuyProps {
    children?: string
    link?: string
}

const ButtonBox = styled.button`
    /* width: 60px; */
    height: 50px;
    padding: 0 10px;
    background-color: ${({ theme }) => theme.colors.actions.sucess};
    color: ${({ theme }) => theme.colors.light.default};
    border: 2px solid ${({ theme }) => theme.colors.actions.sucess};
    border-radius: 5px;

    &:hover {
        background-color: lightgreen;
        border-color: lightgreen;
        color: ${({ theme }) => theme.colors.actions.sucess};
    }
`
const LinkBuy = styled.a`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`

const TitleButton = styled.h6`
    text-transform: uppercase;
`
export function ButtonBuy(props: ButtonBuyProps) {
    return (
        <ButtonBox>
            <LinkBuy href={props.link ?? '#'} target="_blank">
                <TitleButton>{props.children ?? ''}</TitleButton>
                <IconBuy />
            </LinkBuy>
        </ButtonBox>
    )
}