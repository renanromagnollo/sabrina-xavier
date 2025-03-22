import { ReactNode } from "react";
import { Address } from "../_components/Address";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <Address />
    </>
  );
}
