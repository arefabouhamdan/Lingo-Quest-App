import React from "react";
import { Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import "../global.css";

export default function Index() {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === "light" ? "text-black" : "text-white";
  const themeViewStyle = colorScheme === "light" ? "bg-white" : "bg-darkgray";
  const statusBarStyle = colorScheme === "light" ? "dark" : "light";
  const statusBarBackgroundColor =
    colorScheme === "light" ? "#ffffff" : "#313131";

  return (
    <SafeAreaView
      className={`${themeViewStyle} flex-1 justify-center items-center`}
    >
      <StatusBar
        style={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
      />
    </SafeAreaView>
  );
}
