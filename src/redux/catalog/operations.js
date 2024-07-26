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
  async ({ page = 1, limit = 12, filters = {} }, thunkAPI) => {
    try {
      const queryParams = new URLSearchParams({ page, limit });

      Object.keys(filters).forEach((key) => {
        if (
          filters[key] &&
          key !== "rentalPrice" &&
          key !== "mileageFrom" &&
          key !== "mileageTo"
        ) {
          queryParams.append(key, filters[key]);
        }
      });

      const response = await axiosInstance.get(
        `/Adverts?${queryParams.toString()}`
      );
      let items = response.data;

      // Так як мокап апі не підтримує нормальну фільтрацію на безкоштовній версії будемо використовувати кастомну

      // Фільтрація по ціні
      if (filters.rentalPrice) {
        items = items.filter(
          (item) =>
            parseInt(item.rentalPrice.replace("$", ""), 10) <=
            filters.rentalPrice
        );
      }

      // Фільтрація по пробігу
      if (filters.mileageFrom || filters.mileageTo) {
        const from = filters.mileageFrom
          ? parseInt(filters.mileageFrom, 10)
          : 0;
        const to = filters.mileageTo
          ? parseInt(filters.mileageTo, 10)
          : Infinity;

        items = items.filter((item) => {
          const mileage = parseInt(item.mileage, 10);
          return mileage >= from && mileage <= to;
        });
      }

      return {
        items,
      };
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
