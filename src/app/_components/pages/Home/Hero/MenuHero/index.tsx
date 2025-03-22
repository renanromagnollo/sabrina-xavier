import { NAV_ITEMS } from "@/app/_components/Menus/MenuTop";
import { NavItem } from "@/app/_components/Menus/NavItem";
import { usePathname } from "next/navigation";
import styled from "styled-components";


const Menu = styled.nav`
  margin-top: 30px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  gap: 10px;
  color: ${({ theme }) => theme.colors.primary.dark};
  div {
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.primary.default};
    }
    h3 {
      font-size: 2rem;
    }
  }
`;

const DivMenu = styled.div`
  display: flex;
  justify-self: flex-end;

  @media (max-width: 1190px) {
    display: none;
  }
`;
export function MenuHero() {
  const path = usePathname();
  return (
    <DivMenu>
      <Menu>
        {NAV_ITEMS.map((item) => {
          if (item.href === "/" && path === "/") return;
          return <NavItem {...item} key={item.label} />;
        })}
      </Menu>
    </DivMenu>
  );
}
