import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAdverts } from "./operations";

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

export const { setPage } = slice.actions;
export const advertsReducer = slice.reducer;
