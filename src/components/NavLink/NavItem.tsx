import { ReactNode } from "react";
import css from "./navItem.module.css";

interface Props {
  children: ReactNode;
}

export const NavItem: React.FC<Props> = ({ children }) => {
  return <li className={css.nav_item}>{children}</li>;
};
