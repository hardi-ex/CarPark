import css from "./Favorites.module.css";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import Advert from "../Advert/Advert";

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length === 0 ? (
        <div className={css.container}>
          <p className={css.text}>No favorites yet </p>
          <img src="/sad.svg" alt="Sad man" width="30" height="30" />
        </div>
      ) : (
        <ul className={css.list}>
          {favorites.map((advert) => (
            <li key={advert.id} className={css.listItem}>
              <Advert advert={advert} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Favorites;
