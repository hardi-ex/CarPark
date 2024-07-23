import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAdverts, getAdvert } from "../catalog/operations";
import { selectAdvertsItems } from "./selectors";
import { selectFilter } from "../filters/selectors";

const initialState = {
  adverts: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: "adverts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.adverts.items = action.payload;
      })
      .addCase(getAdvert.fulfilled, (state, action) => {
        state.adverts.items = action.payload;
      })
      .addMatcher(isAnyOf(getAdverts.pending, getAdvert.pending), (state) => {
        state.adverts.loading = true;
      })
      .addMatcher(
        isAnyOf(getAdverts.fulfilled, getAdvert.fulfilled),
        (state) => {
          state.adverts.loading = false;
          state.adverts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getAdverts.rejected, getAdvert.rejected),
        (state, action) => {
          state.adverts.loading = false;
          state.adverts.error = action.payload;
        }
      );
  },
});

export const advertsReducer = slice.reducer;

export const selectFilteredContacts = createSelector(
  [selectAdvertsItems, selectFilter],
  (adverts, filter) => {
    if (typeof filter !== "string") {
      return adverts;
    }
    if (!filter) return adverts;
    return adverts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
