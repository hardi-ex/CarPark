export const selectError = (state) => state.adverts.error;
export const selectIsLoading = (state) => state.adverts.loading;
export const selectAdvertsItems = (state) => state.adverts.items || [];
export const selectPage = (state) => state.adverts.page;
export const selectTotal = (state) => state.adverts.total;
