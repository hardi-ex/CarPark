import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: {},
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.images[action.payload.id] = action.payload.url;
    },
  },
});

export const { addImage } = imagesSlice.actions;
export const imagesReducer = imagesSlice.reducer;
