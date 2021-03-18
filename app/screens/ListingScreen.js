import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import covidApi from "../api/covidApi";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

function ListingScreen({}) {
  const [data, setData] = useState([]);

  const getGlobal = async () => {
    const result = await covidApi.get("/summary");
    setData(result.data.Countries);
    console.log(data);
  };

  useEffect(() => {
    getGlobal();
  }, []);

  return (
    <Screen style={styles.container}>
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
        style={{ marginLeft: 20 }}
      />
    </Screen>
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
