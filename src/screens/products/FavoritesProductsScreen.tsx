import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, View } from 'react-native';
import { Header } from '../../components/Header';
import { FavoritesProductsScreenProp, Product } from '../../types/types';
import { CTButton } from '../../components/CTButton';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '@/src/store/store';
import { ProductItem } from '@/src/components/ProductItem';
import { setProductToAsyncStorage } from '@/src/utils/storedProducts';
import { globalStyles } from '@/src/styles/globalStyles';

export const FavoritesProductsScreen = () => {
  const navigation = useNavigation<FavoritesProductsScreenProp>();
  const favorites = useSelector((state: RootState) => state.products.favorites);

  const handleProductClick = useCallback(
    async (product: Product) => {
      setProductToAsyncStorage(product);
      navigation.navigate('ProductDetailsScreen');
    },
    [navigation]
  );

  const renderItem = useCallback(
    ({ item }: { item: Product }) => <ProductItem product={item} onPress={handleProductClick} />,
    [handleProductClick]
  );

  return (
    <View style={globalStyles.mainContainer}>
      <Header title='Обрані товари' isBackArrow={true} navigation={navigation} />
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={globalStyles.productsContainer}
      />
      <CTButton text='Додати товар' onClick={() => navigation.navigate('AddProductScreen')} propButtonStyles={{ marginHorizontal: 20 }} />
    </View>
  );
};
