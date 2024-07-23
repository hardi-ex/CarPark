import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAdverts } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "adverts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
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

export const advertsReducer = slice.reducer;
