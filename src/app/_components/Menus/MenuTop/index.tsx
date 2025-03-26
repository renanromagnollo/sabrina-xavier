import styled from 'styled-components';
import { NavItem } from '../NavItem';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const NAV_ITEMS = [
  {
    label: 'Página Inicial',
    href: '/',
  },
  {
    label: 'Serviços',
    href: '/servicos',
  },
  {
    label: 'Dicas',
    href: '/dicas',
  },
  {
    label: 'Contatos',
    href: '/contatos',
  },
];

interface showNavList {
  $burguerOpened: boolean;
}

const NavList = styled.nav<showNavList>`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 1.6rem;
  transition: opacity 1s ease;

  @media (max-width: 600px) {
    visibility: ${({ $burguerOpened }) => ($burguerOpened ? 'visible' : 'hidden')};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
    right: 0;
    top: 38px;
    position: absolute;
    z-index: 500;
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

export function MenuTop({
  showOnHeader,
  burguerOpened,
  setBurguerOpened,
}: {
  showOnHeader: boolean;
  burguerOpened: boolean;
  setBurguerOpened: (situation: boolean) => void;
}) {
  const path = usePathname();
  return (
    <NavList $burguerOpened={burguerOpened}>
      {NAV_ITEMS.map((item) => {
        if (item.href === '/' && path === '/') return;
        return <NavItem {...item} key={item.label} setBurguerOpened={setBurguerOpened} />;
      })}
    </NavList>
  );
}
