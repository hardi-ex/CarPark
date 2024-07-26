import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAdverts, getAllAdverts } from "./operations";
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
      .addMatcher(
        isAnyOf(getAdverts.pending, getAllAdverts.pending),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(getAdverts.fulfilled, getAllAdverts.fulfilled),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getAdverts.rejected, getAllAdverts.rejected),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setPage, resetPage } = slice.actions;
export const advertsReducer = slice.reducer;

export const selectFilteredContacts = createSelector(
  [selectAdvertsItems, selectFilter],
  (adverts, filter) => {
    if (!adverts) return [];
    return adverts.filter((advert) => {
      const matchMake =
        !filter.make ||
        advert.make.toLowerCase().includes(filter.make.toLowerCase());
      const matchPrice =
        !filter.rentalPrice ||
        parseFloat(advert.rentalPrice.replace("$", "")) < filter.rentalPrice;
      const matchMileageFrom =
        !filter.mileageFrom || advert.mileage >= filter.mileageFrom;
      const matchMileageTo =
        !filter.mileageTo || advert.mileage <= filter.mileageTo;
      return matchMake && matchPrice && matchMileageFrom && matchMileageTo;
    });
  }
);
