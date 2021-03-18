import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import ListCard from "../components/ListCard";
import MyButton from "../components/MyButton";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.jpg")} style={styles.icon} />

      <View style={{ flex: 2, alignItems: "center" }}>
        <ListCard
          color="#f9c500"
          style={{ width: "90%" }}
          fontSize={24}
          country="pakistan"
          totalConfirmed="40,000"
          totalRecovered="25,000"
          totalDeaths="1100"
        />
      </View>

      <View style={{ flex: 1 }}>
        <MyButton
          title="Browse All Countries"
          color={colors.primary}
          style={{ alignSelf: "center", width: "75%", marginTop: 40 }}
          onPress={() => navigation.navigate("Listings")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    height: "40%",
    width: "100%",
    marginBottom: 20,
  },
});

export default HomeScreen;
