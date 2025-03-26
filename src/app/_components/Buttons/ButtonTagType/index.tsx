
import styled from "styled-components"
import { IconSecador } from "../../Icons/IconSecador";
import { IconPaint } from "../../Icons/IconPaint";

interface ButtonTagTypeProps {
    type?: string
}

const ButtonBox = styled.button<ButtonTagTypeProps>`
    /* width: 70px; */
    padding: 5px;
    /* height: 30px; */
    border-radius: 12px;
    background-color: ${props => {
        switch (props.type) {
            case 'make':
                return props.theme.colors.secundary.dark;
            case 'hair':
                return props.theme.colors.dark.default;
        }
    }};
    border: none;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 5px;
    color: ${({ theme }) => theme.colors.light.default};
    padding: 1px 2px;
`

export function ButtonTagType({ type = 'hair' }: ButtonTagTypeProps) {


    return (
        <ButtonBox type={type}>
            {type === 'hair' ?
                <Content>
                    <IconSecador size="20px" />
                    <h5>Hair</h5>
                </Content>
                :
                <Content>
                    <IconPaint />
                    <h5>Make</h5>
                </Content>
            }
        </ButtonBox>
    )
}