import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function Title({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginLeft: 15,
  },
});

export default Title;
