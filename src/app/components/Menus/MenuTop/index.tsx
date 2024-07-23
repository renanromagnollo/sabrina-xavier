import styled from "styled-components";
import { NavItem } from "../NavItem";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  {
    label: "Serviços",
    href: "/servicos",
  },
  {
    label: "Estúdio",
    href: "/studio",
  },
  {
    label: "Dicas",
    href: "/posts",
  },
  {
    label: "Contatos",
    href: "/contacts",
  },
];

interface showNavList {
  visibility: boolean;
}

const NavList = styled.nav<showNavList>`
  position: relative;
  display: flex;
  width: 100%;
  /* display: flex; */
  justify-content: center;
  gap: 20px;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 1.6rem;
  visibility: ${({ visibility }) => (visibility ? "visible" : "hidden")};
  opacity: ${({ visibility }) => (visibility ? 1 : 0)};
  transition: opacity 1s ease;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    right: 0;
    height: 100vh;
    top: 38px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary.light};

    & > * {
      font-size: 3rem;
      padding: 2rem;
      cursor: pointer;
      width: 100%;
      text-align: center;
      &:hover {
        color: ${({ theme }) => theme.colors.light.default};
        background-color: ${({ theme }) => theme.colors.primary.dark};
      }
    }
  }
`;

export function MenuTop({ show }: { show: boolean }) {
  return (
    <NavList visibility={show}>
      {NAV_ITEMS.map((item) => (
        <NavItem {...item} key={item.label} />
      ))}
    </NavList>
  );
}
