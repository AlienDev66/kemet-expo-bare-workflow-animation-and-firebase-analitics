import React from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  CaesarDressing_400Regular,
} from "@expo-google-fonts/caesar-dressing";
import { ThemeProvider } from "styled-components";
import theme from "./src/app/global/styles/theme";
import { Routes } from "./src/app/routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    CaesarDressing_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
}
