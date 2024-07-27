import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { advertsReducer } from "./catalog/slice";
import { filteredReducer } from "./filters/slice";
import { favoritesReducer } from "./favorites/slice";
import { imagesReducer } from "./images/slice";

const rootReducer = combineReducers({
  adverts: advertsReducer,
  filters: filteredReducer,
  favorites: favoritesReducer,
  images: imagesReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["adverts", "favorites", "images"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
