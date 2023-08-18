import Style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "@/assets/hexagonLogo.png";

const Header: React.FC = () => {
  return (
    <header className={Style.header}>
      <div className={Style.header__container}>
        <NavLink className={Style.header__container} to="/">
          <img
            className={Style.header__logo}
            src={logo}
            alt="jgregoridev page"
          />
          <h1 className={Style.header__title}>jgregoridev</h1>
        </NavLink>
      </div>
      <nav className={Style.header__nav}>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? Style["header__link--active"]
              : Style.header__link
          }
          to="/"
        >
          Inicio
        </NavLink>
        {/* <NavLink   className={
            ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? Style["header__link--active"] : Style.header__link
        }
       to="/about">About</NavLink> */}
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? Style["header__link--active"]
              : Style.header__link
          }
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? Style["header__link--active"]
              : Style.header__link
          }
          to="/proyectos"
        >
          Proyectos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
