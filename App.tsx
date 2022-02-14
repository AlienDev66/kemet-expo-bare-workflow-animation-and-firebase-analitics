import React from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Orbitron_700Bold } from "@expo-google-fonts/orbitron";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { ThemeProvider } from "styled-components";
import theme from "./src/app/global/styles/theme";
import { Routes } from "./src/app/routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Orbitron_700Bold,
    Inter_400Regular,
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
