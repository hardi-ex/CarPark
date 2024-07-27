import { useState } from "react";
import { useTranslation } from "react-i18next";
import AnimatedFab from "../AnimatedFab/AnimatedFab";
import AdvertList from "../AdvertList/AdvertList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./Catalog.module.css";

export const Catalog = () => {
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  const { t } = useTranslation();

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={css.catalog}>
      <button className={css.filtersButton} onClick={toggleFilters}>
        {showFilters ? t("hideFilters") : t("showFilters")}
      </button>
      <div className={`${css.searchBox} ${showFilters ? css.show : css.hide}`}>
        <SearchBox onSearch={handleSearch} />
      </div>
      <AdvertList filters={filters} />
      <AnimatedFab />
    </div>
  );
};

export default Catalog;
