import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Seperator from "../components/Seperator";
import colors from "../config/colors";

function ListCard({
  color = "dodgerblue",
  country,
  totalConfirmed,
  totalDeaths,
  totalRecovered,
  fontSize = 20,
  style,
}) {
  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      <View style={{ height: "30%", justifyContent: "center" }}>
        <Text style={[styles.title, { fontSize: fontSize }]}>{country}</Text>
      </View>

      <Seperator style={{ width: "90%" }} />

      <View style={{ height: "25%", justifyContent: "center" }}>
        <Text style={[styles.text, { fontSize: fontSize - 2 }]}>
          {totalConfirmed}
        </Text>
      </View>

      <View style={[styles.row]}>
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
    height: 200,
    width: 180,
    borderRadius: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "15%",
    paddingHorizontal: 10,
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ListCard;
