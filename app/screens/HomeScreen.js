import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import ListCard from "../components/ListCard";
import MyButton from "../components/MyButton";
import covidApi from "../api/covidApi";

function HomeScreen({ navigation }) {
  const [data, setData] = useState({});

  const getPakistan = async () => {
    const result = await covidApi.get("/country/pakistan");
    setData(result.data[result.data.length - 1]);
  };

  useEffect(() => {
    getPakistan();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.jpg")} style={styles.icon} />

      <View style={{ flex: 2, alignItems: "center" }}>
        <ListCard
          color="#f9c500"
          style={{ width: "90%" }}
          fontSize={24}
          country={"Pakistan"}
          totalConfirmed={data.Confirmed}
          totalRecovered={data.Recovered}
          totalDeaths={data.Deaths}
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
