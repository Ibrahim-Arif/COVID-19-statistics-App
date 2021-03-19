import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

import HomeScreen from "./app/screens/HomeScreen";
import ListingScreen from "./app/screens/ListingScreen";
import colors from "./app/config/colors";
import navigationTheme from "./app/config/navigationTheme";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        activeColor={colors.primary}
        barStyle={{ backgroundColor: colors.background }}
        inactiveColor={colors.primarylight}
        initialRouteName="Listings"
        shifting={true}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Listings"
          component={ListingScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Fontisto
                name="world-o"
                color={color}
                size={26}
                style={{ width: 26 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
