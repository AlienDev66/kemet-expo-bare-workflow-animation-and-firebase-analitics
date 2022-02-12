import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GettingStarted } from "../screens/GettingStarted";

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="GettingStarted">
      <Screen
        name="GettingStarted"
        component={GettingStarted}
        options={{ headerShown: false }}
      />
    </Navigator>
  </NavigationContainer>
);
