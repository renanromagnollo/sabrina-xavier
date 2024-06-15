import { HairStyleCard } from "@/app/components/Cards/HairStyleCard"
import styled from "styled-components"

interface HairStyleProps {

}

const SectionArea = styled.section`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    justify-content: center;
`
const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
`

export function HairStyle(props : HairStyleProps){
    return(
        <SectionArea>
            <h1>Hair Style</h1>
            <ContainerCards>
                <HairStyleCard/>
                <HairStyleCard/>
                <HairStyleCard/>
                <HairStyleCard/>
            </ContainerCards>
        </SectionArea>
    )
}