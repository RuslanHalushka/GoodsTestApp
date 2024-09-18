import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Product, ProductDetailsScreenNavigationProp } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import { getProductFromAsyncStorage, handleClickLike, setFavoritesToAsyncStorage } from '@/src/utils/storedProducts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import { addFavorites } from '@/src/store/productSlice';
import { globalStyles } from '@/src/styles/globalStyles';

export const ProductDetailsScreen = () => {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product>();
  const favorites = useSelector((state: RootState) => state.products.favorites);

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductFromAsyncStorage();
      product && setProduct(product);
    };
    getProduct();
  }, []);

  const handleLikeClick = async () => {
    if (product) {
      const updatedFavorites = handleClickLike(product, favorites)();
      dispatch(addFavorites(updatedFavorites));
      await setFavoritesToAsyncStorage(updatedFavorites);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        isBackArrow={true}
        navigation={navigation}
        isLikeButton={true}
        isFavorite={product ? favorites.some((fav) => fav.id === product.id) : false}
        onClickLike={handleLikeClick}
      />
      <View style={globalStyles.flex1}>
        <Image
          source={product?.image ? { uri: product?.image } : require('@/assets/imgs/undefined.jpg')}
          style={globalStyles.productImageRelative}
        />
        <View style={globalStyles.aboutProductContainer}>
          <Text style={globalStyles.productTitle}>{product?.title}</Text>
          <Text style={[globalStyles.productPrice, { fontSize: 20 }]}>${product?.price}</Text>
          <Text style={globalStyles.description}>{product?.description}</Text>
        </View>
      </View>
    </View>
  );
};
