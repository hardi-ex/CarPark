import { createSlice } from "@reduxjs/toolkit";
import { getAllAdverts } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  total: 0,
  filters: {},
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetPage: (state) => {
      state.page = 1;
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.total = action.payload.length;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllAdverts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, setFilters, resetPage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
