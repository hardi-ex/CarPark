import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    carBrand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.carBrand = action.payload;
      state.filters.price = action.payload;
      state.filters.mileageFrom = action.payload;
      state.filters.mileageTo = action.payload;
    },
  },
});

export const filteredReducer = slice.reducer;
export const { changeFilter } = slice.actions;
