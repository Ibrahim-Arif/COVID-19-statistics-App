import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ListCard from "../components/ListCard";
import MyButton from "../components/MyButton";

import Title from "../components/Title";
import colors from "../config/colors";

function HomeScreen({}) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.jpg")} style={styles.icon} />
      <Title>COVID-19 in Pakistan</Title>
      <ListCard
        color={colors.primary}
        style={{ alignSelf: "center", marginTop: 20, width: "60%" }}
        title="pakistan"
        totalConfirmed="40,000"
        totalRecovered="25,000"
        totalDeaths="1100"
      />
      <MyButton title="Browse All Countries" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    height: 250,
    width: "100%",
  },
});

export default HomeScreen;
