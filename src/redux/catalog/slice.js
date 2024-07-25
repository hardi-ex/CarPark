import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAdverts } from "./operations";
import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";
import { selectAdvertsItems } from "./selectors";

const initialState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  total: 0,
};

const slice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetPage: (state) => {
      state.page = 1;
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        const newAdverts = action.payload.items || [];
        if (action.meta.arg.page === 1) {
          state.items = newAdverts;
        } else {
          state.items = [...state.items, ...newAdverts];
        }
        state.total = action.payload.total;
      })
      .addMatcher(isAnyOf(getAdverts.pending), (state) => {
        state.loading = true;
      })
      .addMatcher(isAnyOf(getAdverts.fulfilled), (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(getAdverts.rejected), (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, resetPage } = slice.actions;
export const advertsReducer = slice.reducer;

export const selectFilteredContacts = createSelector(
  [selectAdvertsItems, selectFilter],
  (adverts, filter) => {
    if (!adverts) return [];
    return adverts.filter((advert) => {
      const matchCarBrand =
        !filter.carBrand ||
        advert.make.toLowerCase().includes(filter.carBrand.toLowerCase());
      const matchPrice =
        !filter.price ||
        parseFloat(advert.rentalPrice.replace("$", "")) <=
          parseFloat(filter.price);
      const matchMileageFrom =
        !filter.mileageFrom || advert.mileage >= parseFloat(filter.mileageFrom);
      const matchMileageTo =
        !filter.mileageTo || advert.mileage <= parseFloat(filter.mileageTo);
      return matchCarBrand && matchPrice && matchMileageFrom && matchMileageTo;
    });
  }
);
