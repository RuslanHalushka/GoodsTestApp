import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/types";

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products.push(...action.payload);
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productSlice.actions;
export default productSlice.reducer;
