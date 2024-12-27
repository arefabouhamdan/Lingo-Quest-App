import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";

const LanguageBar = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const language = "German";
  const level = "A1";

  const borderStyle = tw`${themeViewStyle} flex flex-row items-start p-5 justify-center gap-5 mt-95 rounded-lg w-11/12 h-22 border border-gray-200`;
  
  return (
    <View style={borderStyle}>
      <Image source={require("@/assets/images/flags/German.png")} />
      <Text style={tw`${themeTextStyle} text-2xl font-bold `}>
        {language} {level}
      </Text>
    </View>
  );
};

export default LanguageBar;
