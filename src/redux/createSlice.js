import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  create: JSON.parse(localStorage.getItem("Product")) || [],
  search: [],
};
export const CreateRedux = createSlice({
  name: "CREATE_SLICE",
  initialState,
  reducers: {
    createProduct(state, action) {
      let newProduct = [...state.create, action.payload];
      localStorage.setItem("Product", JSON.stringify(newProduct));
      state.create = newProduct;
    },
    searchfunction(state, action) {
      state.search = state.product.filter((el) =>
        el.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});
export const { createProduct, searchfunction } = CreateRedux.actions;
export default CreateRedux.reducer;
