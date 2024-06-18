import styled from "styled-components"
import { CardMakeup } from "./CardMakeup"

interface MakeUpProps {

}

const SectionArea = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
`

const Container  = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const TextArea = styled.div`
    width: 50%;
    color: ${({theme}) => theme.colors.primary.default};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 70px;

    h3 {
        color: ${({theme}) => theme.colors.primary.dark};
    }
`

const ImagesArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 40px;
`
export function MakeUp(props : MakeUpProps){
    return(
        <SectionArea>
            <Container>
                <TextArea>
                    <h3>Make Up</h3>
                    <h1>"Realce sua beleza natural com maquiagens e sobrancelhas perfeitas para você."</h1>
                </TextArea>
                <ImagesArea>
                    <CardMakeup/>
                    <CardMakeup/>
                </ImagesArea>
            </Container>
        </SectionArea>
    )
}