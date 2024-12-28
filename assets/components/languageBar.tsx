import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";

type LanguageBarProps = {
  style?: string;
};

const LanguageBar = ({style = ""} : LanguageBarProps ) => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const language = "German";
  const level = "A1";

  const borderStyle = `${themeViewStyle} flex flex-row items-center p-5 justify-center gap-5 mt-10 rounded-lg w-11/12 h-22 border border-gray-200`;

  return (
    <View style={tw`${borderStyle} ${style}`}>
      <Image source={require("@/assets/images/flags/German.png")} />
      <Text style={tw`${themeTextStyle} text-2xl font-bold `}>
        {language} {level}
      </Text>
    </View>
  );
};

export default LanguageBar;
