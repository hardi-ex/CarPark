import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/api";
import toast from "react-hot-toast";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async ({ page = 1, limit = 12, filters = {} }, thunkAPI) => {
    try {
      // Так як безкоштовний mockapi не дозволяє зробити повноцінну фільтрацію, зробимо кастомну на стороні клієнта
      // Отримання всіх оголошень для розрахунку загальної кількості
      const totalResponse = await axiosInstance.get("/Adverts");
      const allItems = totalResponse.data;

      // Фільтрація даних
      let filteredItems = allItems;

      // Фільтрація по ціні
      if (filters.rentalPrice) {
        filteredItems = filteredItems.filter(
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

        filteredItems = filteredItems.filter((item) => {
          const mileage = parseInt(item.mileage, 10);
          return mileage >= from && mileage <= to;
        });
      }

      // Фільтрація по іншим категоріям
      Object.keys(filters).forEach((key) => {
        if (
          filters[key] &&
          key !== "rentalPrice" &&
          key !== "mileageFrom" &&
          key !== "mileageTo"
        ) {
          filteredItems = filteredItems.filter((item) =>
            item[key].toLowerCase().includes(filters[key].toLowerCase())
          );
        }
      });

      const filteredTotal = filteredItems.length;

      // Пагінація відфільтрованих даних
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedItems = filteredItems.slice(startIndex, endIndex);

      return {
        items: paginatedItems,
        total: filteredTotal,
      };
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
