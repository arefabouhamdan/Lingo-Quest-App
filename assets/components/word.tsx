import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../utils/useTheme";
import tw from "twrnc";

type WordProps = {
  word: string;
  translation: string;
};

const Word = ({ word , translation } : WordProps) => {
  const { themeViewStyle, themeTextStyle } = useTheme();

  return (
    <View
      style={tw`${themeViewStyle} items-center justify-center mt-10 rounded-2 w-11/12 h-22 border-2 border-gray-200`}
    >
      <Text style={tw`${themeTextStyle} text-xl font-bold`}>{word} = {translation}</Text>
    </View>
  );
};

export default Word;
