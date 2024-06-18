import Image from "next/image"
import styled from "styled-components"
import { ButtonUnselected } from "../../Buttons/ButtonUnselected"
import { ButtonBuy } from "../../Buttons/ButtonBuy"

interface HairProductCardProps {

}

const BoxCard = styled.div`
    width: 290px;
    /* height: 450px; */
    background-color: ${({theme}) => theme.colors.light.default}; 
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 5px;
`
const FeatureProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin: 10px auto;
`
const ProductImage = styled.div`
    width: 100%;
    height: 30%;
    overflow: hidden;
`

const Title = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.dark.light};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TextCard = styled.div`
    padding: 10px;
    width: 100%;
    height: 20%;
    overflow: hidden;
    color: ${({theme}) => theme.colors.dark.light};

    h5 {
        width: 100%;
        text-align: justify;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        display: -webkit-box;
    }
`

export function HairProductCard(props : HairProductCardProps){
    return(
        <BoxCard>
            <Container>
                <FeatureProduct>
                    <ProductImage>
                        <Image
                            alt="product-image"
                            width={300}
                            height={250}
                            src={'http://picsum.photos//290/450'}
                            style={{objectFit: 'cover'}}
                        />
                    </ProductImage>
                    <Title>
                        <h4>Nome do Produto</h4>
                        <h2>-50%</h2>
                    </Title>
                </FeatureProduct>
                <TextCard>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi sequi, culpa, eaque delectus alias, beatae et veniam accusantium corrupti dolor! Exercitationem, suscipit deserunt sunt velit dicta sit nisi voluptatem esse natus ut quo fugiat, dolor harum provident placeat! Ab?</h5>
                </TextCard>
                <Buttons>
                    <ButtonUnselected color="secundary">Saiba mais</ButtonUnselected>
                    <ButtonBuy/>
                </Buttons>
            </Container>
        </BoxCard>
    )
}