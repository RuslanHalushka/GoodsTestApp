import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { Header } from "../../components/Header";
import { Product, ProductDetailsScreenNavigationProp } from "../../types/types";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProductDetailsScreen = () => {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const getProductFomAsyncStorage = async () => {
      const product = await AsyncStorage.getItem("product");
      product && setProduct(JSON.parse(product));
    };
    getProductFomAsyncStorage();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header isBackArrow={true} navigation={navigation} />
      <View style={styles.product}>
        <Image
          source={
            product?.image
              ? { uri: product?.image }
              : require("@/assets/imgs/undefined.jpg")
          }
          style={styles.productImage}
        />
        <View style={styles.aboutProductContainer}>
          <Text style={styles.productTitle}>{product?.title}</Text>
          <Text style={styles.productPrice}>${product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
  },
  productImage: {
    height: "50%",
    resizeMode: "stretch",
  },
  aboutProductContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    gap: 8,
  },
  productTitle: {
    fontSize: 24,
    fontFamily: "Barlow-Bold",
    color: colors.textPrimary,
  },
  productPrice: {
    fontSize: 20,
    fontFamily: "Barlow-Medium",
    color: colors.textSecondary,
  },
  description: {
    fontSize: 14,
    fontFamily: "Barlow-Regular",
    color: colors.textPrimary,
  },
});
