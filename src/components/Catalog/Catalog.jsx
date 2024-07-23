import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { getAdverts } from "../../redux/catalog/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdvertsItems } from "../../redux/catalog/selectors";

export const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdvertsItems);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <>
      <SearchBox />
      <ContactList adverts={adverts} />
    </>
  );
};
export default Catalog;
