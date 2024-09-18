import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ProductsListScreen } from '../screens/products/ProductsListScreen';
import { AddProductScreen } from '../screens/products/AddProductScreen';
import { colors } from '../styles/colors';
import { ProductDetailsScreen } from '../screens/products/ProductDetailsScreen';
import { FavoritesProductsScreen } from '../screens/products/FavoritesProductsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'ProductsListScreen'}
        screenOptions={{
          contentStyle: {
            backgroundColor: colors.background,
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name='ProductsListScreen' component={ProductsListScreen} />
        <Stack.Screen name='AddProductScreen' component={AddProductScreen} />
        <Stack.Screen name='ProductDetailsScreen' component={ProductDetailsScreen} />
        <Stack.Screen name='FavoritesProductsScreen' component={FavoritesProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
