import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/api";
import toast from "react-hot-toast";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `/Adverts?page=${page}&limit=${limit}`
      );

      const total = response.headers["x-total-count"];

      return {
        items: response.data,
        total: total ? parseInt(total, 10) : 32,
      };
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
