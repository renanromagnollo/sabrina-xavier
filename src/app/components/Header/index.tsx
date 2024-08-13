"use client";

import { UserIcon } from "@/components/Icons/UserIcon";
import styled from "styled-components";
import { MenuTop } from "../Menus/MenuTop";
import { useEffect, useState } from "react";
import { ButtonBurguer } from "../Buttons/ButtonBurguer";
import { usePathname } from "next/navigation";

interface HeaderContainerProps {
  opacity: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.primary.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 30px;
  position: fixed;
  top: 0;
  z-index: 1000;
  opacity: ${({ opacity }) => (opacity ? 0.9 : "none")};
  transition: opacity 1s ease;

  svg {
    color: ${({ theme }) => theme.colors.primary.default};
  }

  @media (max-width: 700px) {
    margin-bottom: 15px;
  }
`;

export function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      console.log(scrollTop);
      console.log(typeof window.innerWidth);
      if (scrollTop >= 240 && !showMenu && window.innerWidth > 600) {
        setShowMenu(true);
      } else if (scrollTop < 240 && showMenu) {
        setShowMenu(false);
      }
    };
    console.log(path);
    if (path !== "/") {
      setShowMenu(true);
      return;
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [showMenu, path]);

  return (
    <HeaderContainer opacity={showMenu}>
      <ButtonBurguer actived={showMenu} setShowMenu={setShowMenu} />
      <MenuTop show={showMenu} />
      <UserIcon />
    </HeaderContainer>
  );
}
