import { configureStore } from "@reduxjs/toolkit";
import CreateRedux from "./createSlice";
import CreateToBasket from "./BasketSlice";

export const store = configureStore({
  reducer: {
    list: CreateRedux,
    bas: CreateToBasket,
  },
});
