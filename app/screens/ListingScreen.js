import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ListItem from "../components/ListItem";

function ListingScreen({}) {
  return (
    <View style={styles.container}>
      <ListItem
        country="pakistan"
        totalConfirmed="40,000"
        totalDeaths="3500"
        totalRecovered="20,000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListingScreen;
