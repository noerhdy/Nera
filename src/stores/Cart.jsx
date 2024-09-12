import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
      const { productId, quantity } = action.payload;
      const IndexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (IndexProductId >= 0) {
        state.items[IndexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
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
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
    },
  },
});
export const { addtoCart, changeQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
