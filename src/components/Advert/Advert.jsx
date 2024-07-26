import { useSelector, useDispatch } from "react-redux";
import { addImage } from "../../redux/images/slice";
import { selectImages } from "../../redux/images/selectors";
import { toggleFavoriteOperation } from "../../redux/favorites/operations";
import { isFavorite } from "../../redux/favorites/selectors";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import "react-lazy-load-image-component/src/effects/blur.css";
import css from "./Advert.module.css";
import { useEffect } from "react";
import { Icon } from "../Icon/Icon";

const Advert = ({ advert, onOpenModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLiked = useSelector((state) => isFavorite(state, advert.id));
  const images = useSelector(selectImages);

  useEffect(() => {
    if (!images[advert.id]) {
      dispatch(addImage({ id: advert.id, url: advert.img }));
    }
  }, [advert, images, dispatch]);

  const handleToggleLike = () => {
    dispatch(toggleFavoriteOperation(advert));
  };

  const { year, rentalPrice, make, model, address, rentalCompany, type } =
    advert;

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <LazyLoadImage
          className={css.image}
          src={images[advert.id] || advert.img}
          alt={make}
          effect="blur"
          threshold={500}
        />
        <div className={css.heartIcon} onClick={handleToggleLike}>
          {isLiked ? (
            <Icon id="yellowheart" width="25" height="25" />
          ) : (
            <Icon id="whiteheart" width="25" height="25" />
          )}
        </div>
      </div>
      <div className={css.details}>
        <h4 className={css.title}>
          {make}&nbsp;{model},&nbsp;{year}
        </h4>
        <p className={css.price}>{rentalPrice}</p>
        <p className={css.info}>
          <span className={css.spanInfo}>{t("type")}: </span>
          {type}
        </p>
        <p className={css.info}>
          <span className={css.spanInfo}>{t("rentalCompany")}: </span>
          {rentalCompany}
        </p>
        <p className={css.info}>
          <span className={css.spanInfo}>{t("address")}: </span>
          {address}
        </p>
      </div>
      <button
        className={css.learnMoreButton}
        onClick={() => onOpenModal(advert)}
      >
        {t("learnMore")}
      </button>
    </div>
  );
};

export default Advert;
