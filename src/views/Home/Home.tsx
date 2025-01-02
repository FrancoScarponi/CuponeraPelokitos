import { LogoHorizontal } from "../../components/LogoHorizontal/LogoHorizontal";
import { LogoVertical } from "../../components/LogoVertical/LogoVertical";
import { NavbarHome } from "../../components/NavbarHome/NavbarHome";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import useIsMobile from "../../hooks/useIsMobile";
import css from "./home.module.css";

export const Home = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <NavbarHome />
      <main className={css.principal}>
        <section className={css.seccion_principal}>
          <div className={css.logo}>
            {isMobile ? <LogoVertical /> : <LogoHorizontal />}
          </div>
          <p className={css.parrafo}>
            Gestiona, usa y transferi tus cuponeras de corte de pelo.
          </p>
          <PrimaryButton color="blue">Iniciar Sesion</PrimaryButton>
        </section>
      </main>
    </>
  );
};
