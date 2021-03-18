import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function MyButton({ title = "Button", onPress, style, color = "#000" }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, { borderColor: color }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: color }]}>{title}</Text>
      <AntDesign name="arrowright" size={24} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    borderWidth: 3,
    flexDirection: "row",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default MyButton;
