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
  show: boolean;
}

const NavList = styled.nav<showNavList>`
  /* display: flex; */
  width: 100%;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  gap: 20px;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 1.6rem;
`;

export function MenuTop({ show }: { show: boolean }) {
  return (
    <NavList show={show}>
      {NAV_ITEMS.map((item) => (
        <NavItem {...item} key={item.label} />
      ))}
    </NavList>
  );
}
