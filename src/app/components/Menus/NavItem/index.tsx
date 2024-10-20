import Link from "next/link";
import styled from "styled-components";

interface NavItemProps {
  label: string;
  href: string;
  setBurguerOpened?: (situation: boolean) => void;
}

const LinkArea = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
  }
`;

export const NavItem = ({ label, href, setBurguerOpened }: NavItemProps) => {
  return (
    <LinkArea onClick={() => { if (setBurguerOpened !== undefined) setBurguerOpened(false) }}>
      <Link href={href}>
        <h6>{label}</h6>
      </Link>
    </LinkArea>
  );
};
