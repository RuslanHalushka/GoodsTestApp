import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../../styles/colors";
import { Header } from "../../components/Header";
import { getProducts } from "../../services/productsService";
import { Product, ProductsListScreenNavigationProp } from "../../types/types";
import { CTButton } from "../../components/CTButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "@/src/store/store";
import { setProducts } from "@/src/store/productSlice";
import { ProductItem } from "@/src/components/ProductItem";

export const ProductsListScreen = () => {
  const navigation = useNavigation<ProductsListScreenNavigationProp>();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const [productsList, setProductsList] = useState<Product[]>([]);

  const getProductsFromAsyncStorage = async (): Promise<Product[] | null> => {
    const storedProducts = await AsyncStorage.getItem("productsList");
    return storedProducts ? JSON.parse(storedProducts) : null;
  };

  const fetchProducts = async () => {
    const fetchedProducts = await getProducts();
    dispatch(setProducts(fetchedProducts));
    await AsyncStorage.setItem("productsList", JSON.stringify(fetchedProducts)); // Save to AsyncStorage
  };

  useEffect(() => {
    const initializeProducts = async () => {
      if (products.length > 0) {
        setProductsList(products);
        return;
      }
      const storedProducts = await getProductsFromAsyncStorage();
      if (storedProducts) {
        setProductsList(storedProducts);
        dispatch(setProducts(storedProducts));
        return;
      }
      await fetchProducts();
    };

    initializeProducts();
  }, [products]);

  const handleProductClick = async (product: Product) => {
    await AsyncStorage.setItem("product", JSON.stringify(product)); //в завданні вказано інформацію про товар брати з Async Storage
    navigation.navigate("ProductDetailsScreen"); //тому не передаю пропсою
  };

  const renderItem = ({ item }: { item: Product }) => (
    <ProductItem product={item} onPress={handleProductClick} />
  );

  return (
    <View style={styles.mainContainer}>
      <Header title="Список товарів" />
      <FlatList
        data={productsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productsContainer}
        initialNumToRender={6}
      />
      <CTButton
        text="Додати товар"
        onClick={() => navigation.navigate("AddProductScreen")}
        propButtonStyles={{ marginHorizontal: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  productsContainer: {
    flexGrow: 1,
  },
  product: {
    backgroundColor: colors.primaryWhite,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: "50%",
  },
  productImage: {
    height: 180,
    width: 160,
    resizeMode: "center",
  },
  productTitle: {
    fontSize: 16,
    fontFamily: "Barlow-Bold",
    marginVertical: 8,
    color: colors.textPrimary,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: "Barlow-Medium",
    color: colors.textSecondary,
  },
});
