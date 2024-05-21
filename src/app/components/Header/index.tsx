'use client'

import { UserIcon } from "@/components/Icons/UserIcon"
import styled from "styled-components"

interface HeaderProps {

}

const HeaderContainer = styled.header`
  /* display: block; */
  width: 100vw;
  height: 38px;
  background-color: ${({theme}) => theme.colors.primary.light};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 30px;

  svg {
    color: ${({theme}) => theme.colors.primary.default};
  }

  @media (max-width: 700px) {
    margin-bottom: 15px;
  }

`
export function Header(props : HeaderProps){
    return(
        <HeaderContainer>
          <UserIcon/>
        </HeaderContainer>
    )
}