import css from "./Advert.module.css";

export const Advert = ({ advert }) => {
  const { year, img, rentalPrice, make, model, address, rentalCompany, type } =
    advert;

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img src={img} alt={make} className={css.image} />
        <div className={css.heartIcon}>❤️</div>
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
