import Link from "next/link";
import styled from "styled-components";

interface NavItemProps {
  label: string;
  href: string;
}

const LinkArea = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
  }
`;

export const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <LinkArea>
      <Link href={href}>{label}</Link>
    </LinkArea>
  );
};
