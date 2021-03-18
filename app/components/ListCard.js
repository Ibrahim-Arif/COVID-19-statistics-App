import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Seperator from "../components/Seperator";
import colors from "../config/colors";

function ListCard({
  color,
  country,
  totalConfirmed,
  totalDeaths,
  totalRecovered,
  fontSize = 20,
  style,
}) {
  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      <Text style={[styles.title, { fontSize: fontSize }]}>{country}</Text>
      <Seperator style={{ width: "90%" }} />

      <Text style={[styles.text, { fontSize: fontSize - 2, padding: 10 }]}>
        {totalConfirmed}
      </Text>

      <View style={[styles.row, { marginTop: 10 }]}>
        <Text style={[styles.text, , { fontSize: fontSize - 4 }]}>
          Total Deaths
        </Text>
        <Text style={[styles.text, , { fontSize: fontSize - 4 }]}>
          {totalDeaths}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.text, , { fontSize: fontSize - 4 }]}>
          Total Cured
        </Text>
        <Text style={[styles.text, , { fontSize: fontSize - 4 }]}>
          {totalRecovered}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "40%",
    borderRadius: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 10,
    textTransform: "capitalize",
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 5,
  },
});

export default ListCard;
