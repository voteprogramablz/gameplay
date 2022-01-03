import React from "react";
import { StatusBar, LogBox } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

LogBox.ignoreLogs([
  "You are not currently signed in to Expo on your development machine",
]);


import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";
import { AuthProvider } from "./src/hooks/auth";

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
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
