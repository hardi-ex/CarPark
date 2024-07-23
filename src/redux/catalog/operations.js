import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/api";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/Adverts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
