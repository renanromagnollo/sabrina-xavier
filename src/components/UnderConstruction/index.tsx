'use client'
import Image from "next/image"
import styled from "styled-components"
import { LogoVertical } from "../Logo/LogoVertical"
import { IconInstagram } from "../Icons/Instagram"

interface UnderConstructionProps {

}

const Container = styled.div`
    width: 60vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h4, h5 {
        color: ${props => props.theme.colors.primary.dark}
    }
    `


const Constructors = styled.div`
    padding: 5rem;
    border-radius: 50%;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-evenly;
`

const InstagramButton = styled.a`
    /* width: 400px; */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({theme}) => theme.colors.primary.dark};
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    svg {
        color: ${({theme}) => theme.colors.primary.dark};
    }
    /* background-color: gray; */
    /* border-radius: 25px; */
    /* padding: 20px; */
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
`
export function UnderConstruction(props : UnderConstructionProps){
    return(
        <Container>
            <LogoVertical width="300px"/>
                <h4>Olá! O site está em fase de desenvolvimento.</h4>
                <h4>Estaremos divulgando a data de lançamento em nosso Instagram.
                </h4>
                <br/>
                <Constructors>
                    <Image 
                        alt="constructor-bye" 
                        src='/constructor_working.gif'
                        width='150'
                        height='150'
                        unoptimized
                        />
                    <Image 
                        alt="constructor-bye" 
                        src='/alert.gif'
                        width='200'
                        height='200'
                        unoptimized
                    />

                </Constructors>
                <h5>Clique no link abaixo e siga o nosso perfil e acompanhe nosso trabalho!</h5>
                <InstagramButton href="https://www.instagram.com/sabrinaxxavier/" target="_blank">
                    
                        <IconInstagram/><h4>sabrinaxxavier</h4>
                    {/* <a href="https://www.instagram.com/sabrinaxxavier/" target="_blank">
                        <IconInstagram/><h4>sabrinaxxavier</h4>
                    </a> */}

                </InstagramButton>
                

        </Container>
    )
}