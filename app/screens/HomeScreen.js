import React from "react";
import { View, StyleSheet, Text } from "react-native";

function HomeScreen({}) {
  return (
    <View style={styles.container}>
      <Text>home screen</Text>
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

export default HomeScreen;
