import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildNavClass = ({ isActive }) => {
  return clsx(isActive && css.activeNavLink);
};

export const Navigation = () => {
  return (
    <header className={css.header}>
      <div>
        <img src="/svg/logo.svg" alt="Logo" width="60" height="60" />
        <h1>CarRental</h1>
      </div>
      <ul>
        <li>
          <NavLink className={buildNavClass} to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className={buildNavClass} to="/catalog">
            CATALOG
          </NavLink>
        </li>
        <li>
          <NavLink className={buildNavClass} to="/favorites">
            FAVORITES
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Navigation;
