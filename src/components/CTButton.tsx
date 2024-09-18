import React, { FC } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ButtonProps } from '../types/types';
import { colors } from '../styles/colors';

export const CTButton: FC<ButtonProps> = React.memo(({ text, onClick, propButtonStyles, disabled, children }: ButtonProps) => {
  return (
    <View style={[styles.buttonContainer, { paddingBottom: Platform.OS === 'android' ? 20 : 0 }]}>
      <TouchableOpacity style={[styles.button, propButtonStyles]} onPress={onClick} disabled={disabled}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 20,
  },
  button: {
    height: 80,
    backgroundColor: colors.primaryBlack,
    borderRadius: 8,
    justifyContent: 'center',
  },
  text: {
    color: colors.primaryWhite,
    fontSize: 20,
    letterSpacing: 1.12,
    fontFamily: 'Barlow-Bold',
    textAlign: 'center',
  },
});
