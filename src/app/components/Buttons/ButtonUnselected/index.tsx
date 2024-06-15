import styled from "styled-components"

interface ButtonUnselectedProps {
    width?: string
    link?: string
    children?: string
    color?: 'primary' | 'secundary' | 'dark' | null
}

interface ButtonCSSProps {
    width?: string
    color?: string | null
}



const ButtonBox = styled.button<ButtonCSSProps>`
    /* --color: ${props => props.color || props.theme.colors.secundary.dark}; */
    --color: ${props => {
        switch(props.color) {
            case 'primary':
                return props.theme.colors.primary.default;
                break;
            case 'secundary':
                return props.theme.colors.secundary.dark;
                break;
            case 'dark':
                return props.theme.colors.dark.light;
                break;
            default:
                return props.theme.colors.dark.light
        }
    }};
    width: ${props => props.width};
    height: 30px;
    color: var(--color);
    padding: 5px;
    border: 2px solid var(--color);
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: var(--color);
        color: ${({theme}) => theme.colors.light.default};
    }
`

export function ButtonUnselected(props : ButtonUnselectedProps){
    return(
        <ButtonBox 
            width={props.width ?? '100px'}
            color={props.color}
        >
            {props.children ?? 'Read more'}
        </ButtonBox>
    )
}