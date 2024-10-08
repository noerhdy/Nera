import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";
import modalReducer from "./ModalSlice";
import toastReducer from "./Toast";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    toast: toastReducer,
    // user
  },
});
