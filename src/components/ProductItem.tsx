import React from "react";
import { Product } from "../types/types";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../styles/colors";

export const ProductItem = React.memo(
  ({
    product,
    onPress,
  }: {
    product: Product;
    onPress: (product: Product) => void;
  }) => {
    return (
      <Pressable onPress={() => onPress(product)} style={styles.product}>
        <Image
          source={
            product.image
              ? { uri: product.image }
              : require("@/assets/imgs/undefined.jpg")
          }
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
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
