import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../styles/colors";
import React, { FC } from "react";
import { InputProps } from "../types/types";

export const CTInput: FC<InputProps> = React.memo(
  ({
    label,
    value,
    onChange,
    onBlur,
    placeholder,
    error,
    type,
    propStyles,
  }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        style={[styles.input, propStyles, error ? styles.inputError : null]}
        keyboardType={type || "default"}
        multiline={true}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
);

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: "Barlow-Medium",
    color: colors.textPrimary,
    marginBottom: 5,
  },
  input: {
    backgroundColor: colors.primaryWhite,
    borderWidth: 1,
    borderColor: colors.primaryWhite,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: "Barlow-Medium",
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    color: colors.error,
    marginTop: 4,
  },
});
