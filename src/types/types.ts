import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  ProductsListScreen: undefined;
  ProductDetailsScreen: undefined;
  AddProductScreen: undefined;
};

export type ProductsListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProductsListScreen"
>;

export type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProductDetailsScreen"
>;

export type AddProductScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AddProductScreen"
>;

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
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  propButtonStyles?: object;
  disabled?: boolean;
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
  type?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
}
