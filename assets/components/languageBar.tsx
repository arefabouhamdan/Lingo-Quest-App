import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { languages } from "@/assets/utils/languages";
import { useStorage } from "@/hooks/useStorage";
import tw from "twrnc";

type LanguageBarProps = {
  style?: string;
};

const LanguageBar = ({style = ""} : LanguageBarProps ) => {
  const { user } = useStorage();
  const { themeViewStyle, themeTextStyle } = useTheme();

  const borderStyle = `${themeViewStyle} flex flex-row items-center p-5 justify-center gap-5 mt-10 rounded-lg w-11/12 h-22 border border-gray-200`;

  return (
    <View style={tw`${borderStyle} ${style}`}>
      <Image source={languages.find((lang) => lang.name === user?.language)?.source} />
      <Text style={tw`${themeTextStyle} text-2xl font-bold `}>
        {user?.language}
      </Text>
    </View>
  );
};

export default LanguageBar;
