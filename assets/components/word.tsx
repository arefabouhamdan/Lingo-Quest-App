import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../utils/useTheme";
import tw from "twrnc";

const Word = ({ word = "" }) => {
  const { themeViewStyle, themeTextStyle } = useTheme();

  return (
    <View style={tw`w-3/4 flex-1 items-start justify-start`}>
        <TouchableOpacity
          style={tw`${themeViewStyle} items-center p-5 justify-center gap-5 mt-10 rounded-2 w-11/12 h-22 border-2 border-sky-400`}
        >
          <Text style={tw`${themeTextStyle} text-xl font-bold `}>{word}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Word;
