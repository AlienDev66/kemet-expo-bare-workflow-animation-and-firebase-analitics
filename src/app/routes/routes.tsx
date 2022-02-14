import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GettingStarted } from "../screens/GettingStarted";
import { Home } from "../screens/Home";
import { GameInformation } from "../screens/GameInformation";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="GettingStarted">
      <Group screenOptions={{ headerShown: false }}>
        <Screen name="GettingStarted" component={GettingStarted} />
        <Screen name="Home" component={Home} />
        <Screen name="GameInformation" component={GameInformation} />
      </Group>
    </Navigator>
  </NavigationContainer>
);
