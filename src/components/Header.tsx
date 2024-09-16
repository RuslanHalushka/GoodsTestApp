import React, { FC } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderProps } from "../types/types";
import { colors } from "../styles/colors";
import Icon from "react-native-vector-icons/Feather";

export const Header: FC<HeaderProps> = React.memo(
  ({ title, isBackArrow, navigation }) => {
    return (
      <View style={styles.mainContainer}>
        {isBackArrow ? (
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Icon name="arrow-left" size={28} color={colors.textPrimary} />
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyBlock} />
        )}
        {title && <Text style={styles.text}>{title}</Text>}
        <View style={styles.emptyBlock} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  text: {
    fontFamily: "Barlow-Bold",
    fontSize: 24,
    color: colors.textPrimary,
  },
  emptyBlock: {
    width: 28,
  },
});
