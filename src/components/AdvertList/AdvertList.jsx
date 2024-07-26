import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../redux/catalog/operations";
import { setPage } from "../../redux/catalog/slice";
import {
  selectPage,
  selectTotal,
  selectIsLoading,
} from "../../redux/catalog/selectors";
import { selectFilteredContacts } from "../../redux/catalog/slice";
import Advert from "../Advert/Advert";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import css from "./AdvertList.module.css";
import { useTranslation } from "react-i18next";

export const AdvertList = ({ filters }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const adverts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);

  const [selectedAdvert, setSelectedAdvert] = useState(null);

  useEffect(() => {
    dispatch(getAdverts({ page: 1, limit: 12, filters }));
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
      dispatch(getAdverts({ page: page + 1, limit: 12, filters }));
    }
  };

  return (
    <>
      {adverts.length === 0 && !isLoading ? (
        <p className={css.noResults}>{t("noResults")}</p>
      ) : (
        <>
          <ul className={css.list}>
            {adverts.map((advert) => (
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
      {adverts.length < total && !isLoading && (
        <button onClick={loadMore} className={css.btnLoadMore}>
          {t("loadMore")}
        </button>
      )}
    </>
  );
};

export default AdvertList;
