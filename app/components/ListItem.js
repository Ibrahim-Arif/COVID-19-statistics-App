import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const Seperator = () => {
  return (
    <View
      style={{
        height: "100%",
        borderWidth: 1,
        borderColor: colors.lightgrey,
      }}
    />
  );
};

function ListItem({
  country,
  totalConfirmed,
  totalRecovered,
  totalDeaths,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.country} numberOfLines={1}>
        {country}
      </Text>

      <Seperator />
      <Text style={[styles.text, { color: colors.primary }]} numberOfLines={1}>
        {totalConfirmed}
      </Text>

      <Seperator />
      <Text style={[styles.text, { color: colors.danger }]} numberOfLines={1}>
        {totalRecovered}
      </Text>

      <Seperator />
      <Text
        style={[styles.text, { color: colors.secondary }]}
        numberOfLines={1}
      >
        {totalDeaths}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  country: {
    fontWeight: "bold",
    fontSize: 18,
    width: "30%",
    textTransform: "capitalize",
    color: colors.primary,
    paddingHorizontal: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
    width: "24%",
    paddingHorizontal: 5,
  },
});

export default ListItem;
