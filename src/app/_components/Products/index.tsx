import { useContext } from "react"
import styled from "styled-components"
import { ProductCard } from "../Cards/ProductCard"

interface HairProductsProps {

}

const Container = styled.section`
    width: 100%;
    margin: 20px 0;
    background-color: ${({ theme }) => theme.colors.secundary.default};
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

export function Products(props: HairProductsProps) {

    // const { hygraphHome } = useContext(DataContext)

    // const listProducts: HygraphProductProps[] = hygraphHome?.products?.slice(0, 3)

    return (
        <Container>
            <ProductsArea>
                {/* {listProducts?.map((item, i) => <ProductCard key={i} item={item} />)} */}
                products
            </ProductsArea>
        </Container>
    )
}