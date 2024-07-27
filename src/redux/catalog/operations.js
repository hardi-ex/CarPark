import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/api";
import toast from "react-hot-toast";

export const getAllAdverts = createAsyncThunk(
  "adverts/getAllAdverts",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/Adverts");
      return response.data;
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
