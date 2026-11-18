import type { ReactNode } from "react";

export type NavItem = {
  label: string;
  href: string;
};

export interface HeaderProps {
  items: NavItem[];
  logo: ReactNode;
  chat: ReactNode;
}