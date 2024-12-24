import React from "react";
import { View, Text, Image, SafeAreaView, TextInput } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Button from "@/assets/components/Button";
import Back from "@/assets/components/Back";
import tw from "twrnc";
import Input from "@/assets/components/Input";

const Levels = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Text>Levels</Text>
    </SafeAreaView>
  );
};

export default Levels;
