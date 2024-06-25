import { HairProductCard } from "@/app/components/Cards/HairProductCard"
import { DataContext } from "@/context/data-context"
import { HygraphProductProps } from "@/types/hygraph-types"
import { useContext } from "react"
import styled from "styled-components"

interface HairProductsProps {

}

const Container = styled.section`
    width: 100%;
    margin: 20px 0;
    background-color: ${({theme})=> theme.colors.secundary.dark};
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

    const {hygraphHome} = useContext(DataContext)

    const listProducts: HygraphProductProps[] = hygraphHome?.products?.slice(0, 3)

    return(
        <Container>
            <ProductsArea>
                {listProducts?.map((item, i) => <HairProductCard key={i} item={item}/>)}
            </ProductsArea>
        </Container>
    )
}