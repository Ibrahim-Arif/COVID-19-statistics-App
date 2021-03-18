import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Seperator from "../components/Seperator";
import colors from "../config/colors";

function ListCard({
  color,
  title,
  totalConfirmed,
  totalDeaths,
  totalRecovered,
  style,
}) {
  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      <Text style={styles.title}>{title}</Text>
      <Seperator style={{ width: "90%" }} />

      <Text style={[styles.text, { fontSize: 20, padding: 10 }]}>
        {totalConfirmed}
      </Text>

      <View style={[styles.row, { marginTop: 10 }]}>
        <Text style={[styles.text, , { fontSize: 18 }]}>Deaths</Text>
        <Text style={[styles.text, , { fontSize: 18 }]}>{totalDeaths}</Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.text, , { fontSize: 18 }]}>Cured</Text>
        <Text style={[styles.text, , { fontSize: 18 }]}>{totalRecovered}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: "40%",
    borderRadius: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
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
