import AdvertList from "../AdvertList/AdvertList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./Catalog.module.css";

export const Catalog = () => {
  return (
    <div className={css.catalog}>
      <SearchBox />
      <AdvertList />
    </div>
  );
};

export default Catalog;
