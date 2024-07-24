import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useTranslation } from "react-i18next";

const buildNavClass = ({ isActive }) => {
  return clsx(isActive && css.activeNavLink);
};

export const Navigation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img src="/svg/logo.svg" alt="Logo" width="60" height="60" />
        <h1>CarRental</h1>
      </div>
      <ul>
        <li>
          <NavLink className={buildNavClass} to="/">
            {t("home")}
          </NavLink>
        </li>
        <li>
          <NavLink className={buildNavClass} to="/catalog">
            {t("catalog")}
          </NavLink>
        </li>
        <li>
          <NavLink className={buildNavClass} to="/favorites">
            {t("favorites")}
          </NavLink>
        </li>
      </ul>
      <div className={css.btnChangeLanguage}>
        <button onClick={() => changeLanguage("en")}>
          <p>{t("langEn")}</p>
        </button>
        <button onClick={() => changeLanguage("ua")}>
          <p>{t("langUa")}</p>
        </button>
      </div>
    </header>
  );
};
export default Navigation;
