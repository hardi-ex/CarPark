import Advert from "../Advert/Advert";
import css from "./AdvertList.module.css";

export const AdvertList = ({ adverts }) => {
  return (
    <ul className={css.list}>
      {adverts.map((advert) => (
        <li key={advert.id} className={css.listItem}>
          <Advert advert={advert} />
        </li>
      ))}
    </ul>
  );
};
export default AdvertList;
