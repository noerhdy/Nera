import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";
import modalReducer from "./ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    // user
  },
});
