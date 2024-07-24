import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import Advert from "../Advert/Advert";
import Modal from "../Modal/Modal";
import { useTranslation } from "react-i18next";
import css from "./Favorites.module.css";

export const Favorites = () => {
  const { t } = useTranslation();
  const favorites = useSelector(selectFavorites);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  const openModal = (advert) => {
    setSelectedAdvert(advert);
  };

  const closeModal = () => {
    setSelectedAdvert(null);
  };

  return (
    <>
      {favorites.length === 0 ? (
        <div className={css.container}>
          <p className={css.text}>{t("noFavorites")}</p>
          <img src="/svg/sad.svg" alt="Sad man" width="30" height="30" />
        </div>
      ) : (
        <ul className={css.list}>
          {favorites.map((advert) => (
            <li key={advert.id} className={css.listItem}>
              <Advert advert={advert} onOpenModal={openModal} />
            </li>
          ))}
        </ul>
      )}

      {selectedAdvert && (
        <Modal
          isOpen={!!selectedAdvert}
          onRequestClose={closeModal}
          advert={selectedAdvert}
        />
      )}
    </>
  );
};

export default Favorites;
