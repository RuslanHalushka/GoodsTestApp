import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/types';

export const handleClickLike = (product: Product, favorites: Product[]) => {
  return () => {
    const updatedFavorites = favorites.some((fav) => fav.id === product.id)
      ? favorites.filter((fav) => fav.id !== product.id)
      : [...favorites, product];
    return updatedFavorites;
  };
};

export const getProductFromAsyncStorage = async (): Promise<Product | null> => {
  const product = await AsyncStorage.getItem('product');
  return product ? JSON.parse(product) : null;
};

export const setProductToAsyncStorage = async (product: Product) => {
  await AsyncStorage.setItem('product', JSON.stringify(product));
};

export const getProductsFromAsyncStorage = async (): Promise<Product[] | null> => {
  const storedProducts = await AsyncStorage.getItem('productsList');
  return storedProducts ? JSON.parse(storedProducts) : null;
};

export const setProductsToAsyncStorage = async (products: Product[]) => {
  await AsyncStorage.setItem('productsList', JSON.stringify(products));
};

export const getFavoritesFromAsyncStorage = async (): Promise<Product[] | []> => {
  const storedFavorites = await AsyncStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const setFavoritesToAsyncStorage = async (products: Product[]) => {
  await AsyncStorage.setItem('favorites', JSON.stringify(products));
};
