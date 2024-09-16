import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ProductsListScreen } from "../screens/products/ProductsListScreen";
import { AddProductScreen } from "../screens/products/AddProductScreen";
import { colors } from "../styles/colors";
import { ProductDetailsScreen } from "../screens/products/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"ProductsListScreen"}
        screenOptions={{
          contentStyle: {
            backgroundColor: colors.background,
            paddingTop: 15,
          },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="ProductsListScreen"
          component={ProductsListScreen}
        />
        <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
