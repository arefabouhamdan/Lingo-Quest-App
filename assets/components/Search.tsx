import React from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../utils/useTheme";
import { useColorScheme } from "react-native";
import tw from "twrnc";

type SearchProps = {
  text: string;
};

const Search = ({ text } : SearchProps) => {
  const { themeViewStyle } = useTheme();

  return (
    <View
      style={tw`${themeViewStyle} flex-row items-center bg-white rounded border-b-4 border-r-4 border-sky-400 px-3 py-2 w-3/4`}
    >
      <Icon name="search" size={20} color="#000" style={tw`mr-2`} />
      <TextInput
        style={tw`flex-1 text-base`}
        placeholder={text}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default Search;
