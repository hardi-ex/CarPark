import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectError = (state) => state.adverts.error;
export const selectIsLoading = (state) => state.adverts.loading;
export const selectAdvertsItems = (state) => state.adverts.items;

export const selectFilteredContacts = createSelector(
  [selectAdvertsItems, selectFilter],
  (adverts, filter) => {
    return adverts.filter((advert) => {
      const matchCarBrand =
        !filter.carBrand ||
        advert.make.toLowerCase().includes(filter.carBrand.toLowerCase());
      const matchPrice =
        !filter.price ||
        parseFloat(advert.rentalPrice.replace("$", "")) <=
          parseFloat(filter.price);
      const matchMileageFrom =
        !filter.mileageFrom || advert.mileage >= parseFloat(filter.mileageFrom);
      const matchMileageTo =
        !filter.mileageTo || advert.mileage <= parseFloat(filter.mileageTo);
      return matchCarBrand && matchPrice && matchMileageFrom && matchMileageTo;
    });
  }
);
