import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderProps } from '../types/types';
import { colors } from '../styles/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const Header: FC<HeaderProps> = React.memo(({ title, isBackArrow, navigation, isLikeButton, isFavorite, onClickLike }) => {
  return (
    <View style={styles.mainContainer}>
      {isBackArrow ? (
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <FeatherIcon name='arrow-left' size={28} color={colors.textPrimary} />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyBlock} />
      )}
      {title && <Text style={styles.text}>{title}</Text>}
      {isLikeButton ? (
        <TouchableOpacity onPress={onClickLike}>
          <FontAwesomeIcon name={isFavorite ? 'heart' : 'heart-o'} size={28} color={colors.textSecondary} />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyBlock} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Barlow-Bold',
    fontSize: 24,
    color: colors.textPrimary,
  },
  emptyBlock: {
    width: 28,
  },
});
