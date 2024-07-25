import AdvertList from "../AdvertList/AdvertList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./Catalog.module.css";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/catalog/selectors";
import Loader from "../Loader/Loader";

export const Catalog = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.catalog}>
      <SearchBox />
      {isLoading ? <Loader /> : <AdvertList />}
    </div>
  );
};

export default Catalog;
