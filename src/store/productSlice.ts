import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/types';

interface ProductState {
  products: Product[];
  favorites: Product[];
}

const initialState: ProductState = {
  products: [],
  favorites: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products.push(...action.payload);
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    addFavorites(state, action: PayloadAction<Product[]>) {
      state.favorites = action.payload;
    },
  },
});

export const { setProducts, addProduct, addFavorites } = productSlice.actions;
export default productSlice.reducer;
