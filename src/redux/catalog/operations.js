import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/api";
import toast from "react-hot-toast";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/Adverts");
      return data;
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
