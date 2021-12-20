import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular: require("./node_modules/@expo-google-fonts/inter/Inter_400Regular.ttf"),
    Inter_500Medium: require("./node_modules/@expo-google-fonts/inter/Inter_500Medium.ttf"),
    Rajdhani_700Bold: require("./node_modules/@expo-google-fonts/rajdhani/Rajdhani_700Bold.ttf"),
    Rajdhani_500Medium: require("./node_modules/@expo-google-fonts/rajdhani/Rajdhani_500Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
