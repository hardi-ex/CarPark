import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carBrand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const filteredReducer = slice.reducer;
export const { changeFilter } = slice.actions;
