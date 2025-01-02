import { ReactNode } from "react";
import css from "./primaryButton.module.css";
interface Props {
  children: ReactNode;
  color: string;
}

export const PrimaryButton: React.FC<Props> = ({ children, color }) => {
  return <button className={`${css.btn} ${css[color]}`}>{children}</button>;
};
