import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteAdverts } from "./operations";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.some((advert) => advert.id === action.payload.id);
      if (exists) {
        return state.filter((advert) => advert.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoriteAdverts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
