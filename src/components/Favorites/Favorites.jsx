import css from "./Favorites.module.css";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import Advert from "../Advert/Advert";

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length === 0 ? (
        <p className={css.text}>
          No favorites yet{" "}
          <img src="/car.svg" alt="Car" width="10" height="10" />
        </p>
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
