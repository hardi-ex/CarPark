import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectPage,
  selectFilteredAdverts,
} from "../../redux/catalog/selectors";
import { setPage, setFilters } from "../../redux/catalog/slice";
import Advert from "../Advert/Advert";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import css from "./AdvertList.module.css";
import { useTranslation } from "react-i18next";

export const AdvertList = ({ filters }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const adverts = useSelector(selectFilteredAdverts);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  useEffect(() => {
    dispatch(setFilters(filters));
    dispatch(setPage(1));
  }, [filters, dispatch]);

  const openModal = (advert) => {
    setSelectedAdvert(advert);
  };

  const closeModal = () => {
    setSelectedAdvert(null);
  };

  const loadMore = () => {
    if (!isLoading) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <>
      {adverts.length === 0 && !isLoading ? (
        <p className={css.noResults}>{t("noResults")}</p>
      ) : (
        <>
          <ul className={css.list}>
            {adverts.slice(0, page * 12).map((advert) => (
              <li key={advert.id} className={css.listItem}>
                <Advert advert={advert} onOpenModal={openModal} />
              </li>
            ))}
          </ul>
          {isLoading && <Loader />}
        </>
      )}
      {selectedAdvert && (
        <Modal
          isOpen={!!selectedAdvert}
          onRequestClose={closeModal}
          advert={selectedAdvert}
        />
      )}
      {adverts.length > page * 12 && (
        <button onClick={loadMore} className={css.btnLoadMore}>
          {t("loadMore")}
        </button>
      )}
    </>
  );
};

export default AdvertList;
