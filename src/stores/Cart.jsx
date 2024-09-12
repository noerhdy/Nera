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
  },
});
export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;
