import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./catalog/slice";
import { filteredReducer } from "./filters/slice";
import { favoritesReducer } from "./favorites/slice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filters: filteredReducer,
    favorites: favoritesReducer,
  },
});
