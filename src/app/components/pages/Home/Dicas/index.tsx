import { DicasCard } from "@/app/components/Cards/DicasCard"
import styled from "styled-components"

interface DicasProps {

}

const SectionArea = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    padding: 80px 0;
    background-color: ${({theme}) => theme.colors.primary.light};
`
const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
`

export function Dicas(props : DicasProps){
    return(
        <SectionArea>
            <Container>
                <DicasCard/>
                <DicasCard/>
                <DicasCard/>
            </Container>
        </SectionArea>
    )
}