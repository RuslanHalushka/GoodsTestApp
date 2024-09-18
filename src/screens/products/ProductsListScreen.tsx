import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, View } from 'react-native';
import { Header } from '../../components/Header';
import { Product, ProductsListScreenNavigationProp } from '../../types/types';
import { CTButton } from '../../components/CTButton';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '@/src/store/store';
import { addFavorites, setProducts } from '@/src/store/productSlice';
import { ProductItem } from '@/src/components/ProductItem';
import {
  setProductsToAsyncStorage,
  getFavoritesFromAsyncStorage,
  getProductsFromAsyncStorage,
  handleClickLike,
  setProductToAsyncStorage,
  setFavoritesToAsyncStorage,
} from '@/src/utils/storedProducts';
import { getProducts } from '@/src/services/productsService';
import { globalStyles } from '@/src/styles/globalStyles';
import { FavoriteAbsoluteButton } from '@/src/components/FavoriteAbsoluteButton';

export const ProductsListScreen = () => {
  const navigation = useNavigation<ProductsListScreenNavigationProp>();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const favorites = useSelector((state: RootState) => state.products.favorites);
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    const initializeProducts = async () => {
      if (products.length > 0) {
        setProductsList(products);
      } else {
        const storedProducts = await getProductsFromAsyncStorage();
        if (storedProducts) {
          setProductsList(storedProducts);
          dispatch(setProducts(storedProducts));
        } else {
          const fetchedProducts = await getProducts();
          await setProductsToAsyncStorage(fetchedProducts);
          dispatch(setProducts(fetchedProducts));
        }
      }
      const storedFavorites = await getFavoritesFromAsyncStorage();
      dispatch(addFavorites(storedFavorites));
    };

    initializeProducts();
  }, [products, dispatch]);

  const handleProductClick = useCallback(
    async (product: Product) => {
      setProductToAsyncStorage(product);
      navigation.navigate('ProductDetailsScreen');
    },
    [navigation]
  );

  const handleLikeClick = useCallback(
    async (product: Product) => {
      if (product) {
        const updatedFavorites = handleClickLike(product, favorites)();
        dispatch(addFavorites(updatedFavorites));
        await setFavoritesToAsyncStorage(updatedFavorites);
      }
    },
    [favorites, dispatch]
  );

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductItem
        product={item}
        onPress={handleProductClick}
        onClickLike={() => handleLikeClick(item)}
        isFavorite={favorites.some((fav) => fav.id === item.id)}
      />
    ),
    [favorites, handleProductClick, handleLikeClick]
  );

  return (
    <View style={globalStyles.mainContainer}>
      <Header title='Список товарів' />
      <FlatList
        data={productsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={globalStyles.productsContainer}
        initialNumToRender={8}
        maxToRenderPerBatch={4}
      />
      <CTButton text='Додати товар' onClick={() => navigation.navigate('AddProductScreen')} propButtonStyles={{ marginHorizontal: 20 }}>
        <FavoriteAbsoluteButton navigation={navigation} />
      </CTButton>
    </View>
  );
};
