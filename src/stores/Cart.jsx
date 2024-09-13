import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  selectedSizes: [], // size
  searchQuery: "", // Menyimpan query pencarian
  filterCategory: "allProduct", // Menyimpan kategori filter
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
      const { productId, quantity, size } = action.payload;

      // Find the index of the item with the same productId and size
      const IndexProductId = state.items.findIndex(
        (item) => item.productId === productId && item.size === size
      );

      if (IndexProductId >= 0) {
        state.items[IndexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity, size });
      }
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const IndexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (quantity > 0) {
        state.items[IndexProductId].quantity = quantity;
      } else {
        state.items.splice(IndexProductId, 1);
      }
    },
    removeFromCart(state, action) {
      const { productId, size } = action.payload;
      // console.log('Removing item with productId:', productId, 'and size:', size);
      state.items = state.items.filter(
        (item) => item.productId !== productId || item.size !== size
      );
    },

    // Kosongkan keranjang
    clearCart(state) {
      state.items = [];
    },

    //filter
    setFilterCategory(state, action) {
      state.filterCategory = action.payload;
    },
    setSelectedSizes(state, action) {
      state.selectedSizes = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },

    // Reset Search and Filter
    resetFilters(state) {
      state.filterCategory = "allProduct";
      state.selectedSizes = [];
      state.searchQuery = "";
    },
  },
});
export const {
  addtoCart,
  resetFilters,
  clearCart,
  changeQuantity,
  removeFromCart,
  setSelectedSizes,
  setSearchQuery,
  setFilterCategory,
} = cartSlice.actions;
export default cartSlice.reducer;
