import { useState } from "react";
import Advert from "../Advert/Advert";
import Modal from "../Modal/Modal";
import { useTranslation } from "react-i18next";
import css from "./AdvertList.module.css";

export const AdvertList = ({ adverts }) => {
  const { t } = useTranslation();
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  const openModal = (advert) => {
    setSelectedAdvert(advert);
  };

  const closeModal = () => {
    setSelectedAdvert(null);
  };

  return (
    <>
      {adverts.length === 0 ? (
        <p className={css.noResults}>{t("noResults")}</p>
      ) : (
        <ul className={css.list}>
          {adverts.map((advert) => (
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

export default AdvertList;
