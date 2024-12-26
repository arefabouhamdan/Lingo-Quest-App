import React from "react";
import { Text, SafeAreaView } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Level from "@/assets/components/level";
import tw from "twrnc";

const Levels = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
     <Level status={'active'}/> 
    </SafeAreaView>
  );
};

export default Levels;
