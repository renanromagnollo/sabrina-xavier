import { HairProductCard } from "@/app/components/Cards/HairProductCard"
import styled from "styled-components"

interface HairProductsProps {

}

const Container = styled.section`
    width: 100%;
    margin: 20px 0;
    background-color: ${({theme})=> theme.colors.dark.light};
    display: flex;
    justify-content: center;
    `

const ProductsArea = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
    /* gap: 50px; */
    padding: 80px 0;
    
`

export function HairProducts(props : HairProductsProps){
    return(
        <Container>
            <ProductsArea>
                <HairProductCard/>
                <HairProductCard/>
                <HairProductCard/>
            </ProductsArea>
        </Container>
    )
}