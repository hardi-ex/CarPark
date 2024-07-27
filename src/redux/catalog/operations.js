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

// З огляду на те, що mockapi.io не надає широких можливостей для фільтрації, ми використовуємо один запит для отримання всіх оголошень, а фільтрацію виконуємо вже на клієнтській стороні. Також немає сенсу використовувати пагінацію, оскільки в будь-якому разі доведеться робити один загальний запит. Цей метод має право на існування лише при невеликій кількості даних з бекенду, як і у нашому випадку.

// Considering that mockapi.io does not provide extensive filtering capabilities, we use a single request to fetch all advertisements and perform filtering on the client side. There is also no point in implementing pagination since we still have to make a single general request. This method is only viable with a small amount of data from the backend, as is the case with our current situation.
