import React from "react";
import { TextInput, View, useColorScheme } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../hooks/useTheme";
import tw from "twrnc";

type SearchProps = {
  text: string;
  setSearch: (text: string) => void;
};

const Search = ({ text, setSearch } : SearchProps) => {
  const { themeViewStyle } = useTheme();
  const colorScheme = useColorScheme();

  return (
    <View
      style={tw`${themeViewStyle} flex-row items-center rounded border-2 border-gray-200 px-3 py-2`}
    >
      <Icon name="search" size={20} color={colorScheme == 'light' ? '#000' : '#fff'} style={tw`mr-2`} />
      <TextInput
        style={tw`flex-1 text-base`}
        placeholder={text}
        placeholderTextColor="#999"
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  );
};

export default Search;
