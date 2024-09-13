import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchVisible: false,
  isOrderVisible: false,
  isFilterVisible: false,
  isSortVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isSearchVisible = action.payload === "search";
      state.isOrderVisible = action.payload === "order";
      state.isFilterVisible = action.payload === "filter";
      state.isSortVisible = action.payload === "sort";
    },
    closeModal(state, action) {
      if (action.payload === "search") state.isSearchVisible = false;
      if (action.payload === "order") state.isOrderVisible = false;
      if (action.payload === "filter") state.isFilterVisible = false;
      if (action.payload === "sort") state.isSortVisible = false;
    },
    closeAllModals(state) {
      state.isSearchVisible = false;
      state.isOrderVisible = false;
      state.isFilterVisible = false;
      state.isSortVisible = false;
    },
  },
});

export const { openModal, closeModal, closeAllModals } = modalSlice.actions;
export default modalSlice.reducer;
