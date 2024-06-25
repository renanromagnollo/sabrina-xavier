import { HairStyleCard } from "@/app/components/Cards/HairStyleCard"
import { DataContext } from "@/context/data-context"
import { HygraphHairStyleProps, HygraphHomeProps } from "@/types/hygraph-types"
import { useContext } from "react"
import styled from "styled-components"



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

export function HairStyle(){
    const {hygraphHome} = useContext(DataContext)
    // console.log(hygraphHome.hairStyles)

    const hairStyleServices: HygraphHairStyleProps[] = hygraphHome.hairStyles
    return(
        <SectionArea>
            <h1>Hair Style</h1>
            <ContainerCards>
                {hairStyleServices?.map((item: HygraphHairStyleProps, i:number) => <HairStyleCard key={i} item={item}/>)}
            </ContainerCards>
        </SectionArea>
    )
}