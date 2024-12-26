import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { useTheme } from "../utils/useTheme"

const Back = ({text = ''}) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const {themeTextStyle} = useTheme();

  return (colorScheme === "light" ? (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={tw`top-5 right-40 z-10 p-3`}
    >
      <Image
        source={require("../../assets/images/icons/back.png")}
      />
      <Text>{text}</Text>
    </TouchableOpacity>
  ):(
    <View style={tw`flex justify-start items-start w-full`}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`top-5 z-10 p-3 flex-row justify-between items-center w-full`}
      >
        <Image
          source={require("../../assets/images/icons/back-white.png")}
        />
        <Text style={tw`text-xl text-white justify-self-center`}>{text}</Text>
      </TouchableOpacity>
    </View>
  ) )
};

export default Back;
