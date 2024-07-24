import css from "./Advert.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavoriteOperation } from "../../redux/favorites/operations";
import { isFavorite } from "../../redux/favorites/selectors";

export const Advert = ({ advert }) => {
  const dispatch = useDispatch();
  const isLiked = useSelector((state) => isFavorite(state, advert.id));

  const handleToggleLike = () => {
    dispatch(toggleFavoriteOperation(advert));
  };

  const { year, img, rentalPrice, make, model, address, rentalCompany, type } =
    advert;

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img src={img} alt={make} className={css.image} />
        <div className={css.heartIcon} onClick={handleToggleLike}>
          {isLiked ? (
            <img
              src="/yellowheart.svg"
              alt="Yellow Heart"
              width="25"
              height="25"
            />
          ) : (
            <img
              src="/whiteheart.svg"
              alt="White Heart"
              width="25"
              height="25"
            />
          )}
        </div>
      </div>
      <div className={css.details}>
        <h4 className={css.title}>
          {make}&nbsp;{model},&nbsp;{year}
        </h4>
        <p className={css.price}>{rentalPrice}</p>
        <p className={css.info}>
          <span className={css.spanInfo}>Type: </span>
          {type}
        </p>
        <p className={css.info}>
          <span className={css.spanInfo}>Rental company: </span>
          {rentalCompany}
        </p>
        <p className={css.info}>
          <span className={css.spanInfo}>Address: </span>
          {address}
        </p>
      </div>
      <button className={css.learnMoreButton}>Learn more</button>
    </div>
  );
};

export default Advert;
