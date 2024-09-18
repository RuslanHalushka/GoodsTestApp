import React from 'react';
import { Product } from '../types/types';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ProductItem = React.memo(
  ({
    product,
    onPress,
    onClickLike,
    isFavorite,
  }: {
    product: Product;
    onPress: (product: Product) => void;
    onClickLike?: () => void;
    isFavorite?: boolean;
  }) => {
    return (
      <Pressable onPress={() => onPress(product)} style={styles.product}>
        {onClickLike && (
          <View style={styles.heartContainer}>
            <TouchableOpacity onPress={onClickLike}>
              <Icon name={isFavorite ? 'heart' : 'heart-o'} size={28} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>
        )}

        <Image source={product.image ? { uri: product.image } : require('@/assets/imgs/undefined.jpg')} style={styles.productImage} />
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
    width: '50%',
  },
  productImage: {
    height: 180,
    width: 160,
    resizeMode: 'center',
  },
  productTitle: {
    fontSize: 16,
    fontFamily: 'Barlow-Bold',
    marginVertical: 8,
    color: colors.textPrimary,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'Barlow-Medium',
    color: colors.textSecondary,
  },
  heartContainer: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});
