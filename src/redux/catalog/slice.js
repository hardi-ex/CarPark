import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAdverts, geyAdvert } from "../catalog/operations";
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
      .addCase(geyAdvert.fulfilled, (state, action) => {
        state.adverts.items = action.payload;
      })
      .addMatcher(isAnyOf(getAdverts.pending, geyAdvert.pending), (state) => {
        state.adverts.loading = true;
      })
      .addMatcher(
        isAnyOf(getAdverts.fulfilled, geyAdvert.fulfilled),
        (state) => {
          state.adverts.loading = false;
          state.adverts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getAdverts.rejected, geyAdvert.rejected),
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
