import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    hasShownToast: false,
  },
  reducers: {
    setToastShown: (state, action) => {
      state.hasShownToast = action.payload;
    },
  },
});

export const { setToastShown } = toastSlice.actions;
export default toastSlice.reducer;
