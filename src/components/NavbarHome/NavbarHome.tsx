import { useState } from "react";
import imagen from "../../assets/descarga.png";
import { NavItem } from "../NavLink/NavItem";
import css from "./NavbarHome.module.css";

export const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={css.navbar}>
      <div className={css.container}>
        <div className={css.container_logo}>
          <img src={imagen} alt="" className={css.logo} />
          <span className={css.title}>Cuponera</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className={css.btn}>
          {isOpen ? "✖" : "☰"}
        </button>
        <ul className={`${css.container_navitems} ${isOpen ? css.show : ""}`}>
          <NavItem>Inicio</NavItem>
          <NavItem>Iniciar Sesion</NavItem>
        </ul>
      </div>
    </nav>
  );
};
