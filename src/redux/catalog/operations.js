import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/api";
import toast from "react-hot-toast";

export const getAllAdverts = createAsyncThunk(
  "adverts/getAllAdverts",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/Adverts`);

      return {
        total: response.data.length,
      };
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `/Adverts?page=${page}&limit=${limit}`
      );

      return {
        items: response.data,
      };
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
