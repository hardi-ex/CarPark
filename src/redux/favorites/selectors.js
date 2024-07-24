export const selectFavorites = (state) => state.favorites;

export const isFavorite = (state, advertId) =>
  state.favorites.some((advert) => advert.id === advertId);
