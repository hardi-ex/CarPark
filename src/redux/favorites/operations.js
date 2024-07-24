import { toggleFavorite } from "./slice";

export const toggleFavoriteOperation = (advert) => (dispatch) => {
  dispatch(toggleFavorite(advert));
};
