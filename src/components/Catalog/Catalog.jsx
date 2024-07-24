import AdvertList from "../AdvertList/AdvertList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./Catalog.module.css";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/catalog/selectors";
import Loader from "../Loader/Loader";

export const Catalog = () => {
  const adverts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.catalog}>
      <SearchBox />
      {isLoading ? <Loader /> : <AdvertList adverts={adverts} />}
    </div>
  );
};

export default Catalog;
