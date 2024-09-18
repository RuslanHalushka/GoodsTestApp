import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { FavoriteAbsoluteButtonProps } from '../types/types';
import { colors } from '../styles/colors';

export const FavoriteAbsoluteButton: FC<FavoriteAbsoluteButtonProps> = React.memo(({ navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate('FavoritesProductsScreen')} style={styles.mainContainer}>
      <Text style={styles.text}>Обрані</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: -80,
    right: 10,
    height: 70,
    width: 70,
    backgroundColor: colors.primaryBlack,
    borderRadius: 20,
  },
  text: {
    fontFamily: 'Barlow-Bold',
    fontSize: 14,
    color: colors.primaryWhite,
  },
});
