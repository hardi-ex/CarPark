import { useState } from "react";
import AdvertList from "../AdvertList/AdvertList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./Catalog.module.css";

export const Catalog = () => {
  const [filters, setFilters] = useState({});

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className={css.catalog}>
      <SearchBox onSearch={handleSearch} />
      <AdvertList filters={filters} />
    </div>
  );
};

export default Catalog;
