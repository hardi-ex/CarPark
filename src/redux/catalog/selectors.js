import { createSelector } from "@reduxjs/toolkit";

export const selectAdvertsItems = (state) => state.adverts.items || [];
export const selectFilters = (state) => state.adverts.filters || {};
export const selectPage = (state) => state.adverts.page;
export const selectIsLoading = (state) => state.adverts.loading;

export const selectFilteredAdverts = createSelector(
  [selectAdvertsItems, selectFilters],
  (adverts, filters) => {
    let filteredItems = adverts;

    if (filters.rentalPrice) {
      filteredItems = filteredItems.filter(
        (item) =>
          item.rentalPrice &&
          parseInt(item.rentalPrice.replace("$", ""), 10) <= filters.rentalPrice
      );
    }

    if (filters.mileageFrom || filters.mileageTo) {
      const from = filters.mileageFrom ? parseInt(filters.mileageFrom, 10) : 0;
      const to = filters.mileageTo ? parseInt(filters.mileageTo, 10) : Infinity;

      filteredItems = filteredItems.filter((item) => {
        const mileage = item.mileage ? parseInt(item.mileage, 10) : 0;
        return mileage >= from && mileage <= to;
      });
    }

    Object.keys(filters).forEach((key) => {
      if (
        filters[key] &&
        key !== "rentalPrice" &&
        key !== "mileageFrom" &&
        key !== "mileageTo"
      ) {
        filteredItems = filteredItems.filter(
          (item) =>
            item[key] &&
            item[key].toLowerCase().includes(filters[key].toLowerCase())
        );
      }
    });

    return filteredItems;
  }
);
