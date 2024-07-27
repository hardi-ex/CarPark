import { toggleFavorite } from "./slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const toggleFavoriteOperation = (advert) => (dispatch) => {
  dispatch(toggleFavorite(advert));
};

export const getFavoriteAdverts = createAsyncThunk(
  "favorites/getFavoriteAdverts",
  async (_, { getState }) => {
    const state = getState();
    const favoriteIds = state.favorites.map((advert) => advert.id);
    const allAdverts = state.adverts.items;
    return allAdverts.filter((advert) => favoriteIds.includes(advert.id));
  }
);
