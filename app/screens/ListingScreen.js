import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

import covidApi from "../api/covidApi";
import ListCard from "../components/ListCard";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Title from "../components/Title";
import colors from "../config/colors";

const topCountriesList = ["united-states", "italy", "Brazil", "india"];
const cardColors = [
  colors.secondary,
  colors.primary,
  colors.danger,
  "dodgerblue",
];

function ListingScreen({}) {
  const [data, setData] = useState([]);
  const [topCountries, settopCountries] = useState([]);

  const getGlobal = async () => {
    const result = await covidApi.get("/summary");
    setData(result.data.Countries);
  };

  const getTop = async () => {
    settopCountries([]);
    let temp = [],
      i = 0;
    for (let country of topCountriesList) {
      const result = await covidApi.get("/total/country/" + country);
      temp.push({ ...result.data.pop(), color: cardColors[i++] });
    }
    settopCountries(temp);
  };

  useEffect(() => {
    getGlobal();
    getTop();
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Top Countries</Title>
        </View>

        <View style={{ flex: 4, justifyContent: "center" }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={topCountries}
            keyExtractor={(item) => item.Country}
            renderItem={({ item }) => (
              <ListCard
                color={item.color}
                fontSize={18}
                country={item.Country}
                totalConfirmed={item.Confirmed}
                totalRecovered={item.Recovered}
                totalDeaths={item.Deaths}
                style={{ marginHorizontal: 10 }}
              />
            )}
          />
        </View>
      </View>

      <View style={{ flex: 3 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.ID}
          renderItem={({ item }) => (
            <ListItem
              country={item.Country}
              totalConfirmed={item.TotalConfirmed}
              totalDeaths={item.TotalDeaths}
              totalRecovered={item.TotalRecovered}
            />
          )}
          // style={{ alignSelf: "center" }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListingScreen;
