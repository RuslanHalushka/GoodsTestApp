import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ReactNode } from 'react';

export type RootStackParamList = {
  ProductsListScreen: undefined;
  ProductDetailsScreen: undefined;
  AddProductScreen: undefined;
  FavoritesProductsScreen: undefined;
};

export type ProductsListScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductsListScreen'>;

export type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetailsScreen'>;

export type AddProductScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddProductScreen'>;

export type FavoritesProductsScreenProp = NativeStackNavigationProp<RootStackParamList, 'FavoritesProductsScreen'>;

export interface Product {
  id: number;
  title: string;
  image?: string;
  price: number;
  description: string;
}

export interface HeaderProps {
  title?: string;
  isBackArrow?: boolean;
  navigation?: any;
  isLikeButton?: boolean;
  isFavorite?: boolean;
  onClickLike?: () => void;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  propButtonStyles?: object;
  disabled?: boolean;
  children?: ReactNode;
}

export interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: any;
  placeholder: string;
  error?: string;
  touched?: boolean;
  propStyles?: object;
  type?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
}

export interface FavoriteAbsoluteButtonProps {
  navigation: any;
}
