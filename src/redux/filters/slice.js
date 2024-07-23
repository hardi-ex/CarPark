import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adverts: {
    name: "",
    number: "",
  },
};

const slice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.adverts.name = action.payload;
      state.adverts.number = action.payload;
    },
  },
});

export const filteredReducer = slice.reducer;
export const { changeFilter } = slice.actions;
