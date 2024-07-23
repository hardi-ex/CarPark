import AdvertList from "../AdvertList/AdvertList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./Catalog.module.css";
import { useSelector } from "react-redux";
import { selectAdvertsItems } from "../../redux/catalog/selectors";

export const Catalog = () => {
  const adverts = useSelector(selectAdvertsItems);
  return (
    <div className={css.catalog}>
      <SearchBox />
      <AdvertList adverts={adverts} />
    </div>
  );
};
export default Catalog;
