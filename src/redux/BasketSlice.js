import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  quantity: 5,
};
export const CreateToBasket = createSlice({
  name: "ADD_TO_BASKET",
  initialState,
  reducers: {
    addToBasket(state, action) {
      let newBasket = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(newBasket));
      state.basket = newBasket;
    },
    deleteBasket(state, action) {
      let deletebas = state.basket.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(deletebas));
      state.basket = deletebas;
    },
    decriment(state, action) {
      let decriment = [...state.basket, state.basket + action.payload];
      state.basket = decriment;
    },
  },
});
export const { addToBasket, deleteBasket, decriment } = CreateToBasket.actions;
export default CreateToBasket.reducer;
