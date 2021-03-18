import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const Seperator = () => {
  return (
    <View
      style={{
        height: "100%",
        borderWidth: 0.6,
        borderColor: colors.darkgrey,
      }}
    />
  );
};

function ListItem({ country, totalConfirmed, totalRecovered, totalDeaths }) {
  return (
    <View style={styles.container}>
      <Text style={styles.country}>{country}</Text>

      <Seperator />
      <Text style={[styles.text, { color: colors.primary }]}>
        {totalConfirmed}
      </Text>

      <Seperator />
      <Text style={[styles.text, { color: colors.danger }]}>
        {totalRecovered}
      </Text>

      <Seperator />
      <Text style={[styles.text, { color: colors.secondary }]}>
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
    height: 50,
  },
  country: {
    fontWeight: "bold",
    fontSize: 18,
    width: "25%",
    textTransform: "capitalize",
    color: colors.primary,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    width: "25%",
    paddingHorizontal: 10,
  },
});

export default ListItem;
