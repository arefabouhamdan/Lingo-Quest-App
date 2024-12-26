import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { useTheme } from "../utils/useTheme";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

const Back = ({ text = "" }) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { themeTextStyle } = useTheme();

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`flex-row p-2 w-full absolute top-0`}
      >
        <Icon
          name="chevron-back-outline"
          color={colorScheme === "light" ? "#000" : "#fff"}
          size={26}
          style={tw`justify-self-start`}
        />
      </TouchableOpacity>
      <Text style={tw`${themeTextStyle} text-xl font-medium text-center p-2`}>
        {text}
      </Text>
    </>
  );
};

export default Back;
