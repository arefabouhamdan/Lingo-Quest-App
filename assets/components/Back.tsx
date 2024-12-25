import React from "react";
import { Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";

const Back = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (colorScheme === "light" ? (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={tw`absolute top-5 left-5 z-10 p-3`}
    >
      <Image
        source={require("../../assets/images/icons/back.png")}
        style={tw`invert`}
      />
    </TouchableOpacity>
  ):(
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={tw`absolute top-5 left-5 z-10 p-3`}
    >
      <Image
        source={require("../../assets/images/icons/back-white.png")}
        style={tw`invert`}
      />
    </TouchableOpacity>
  ) )
};

export default Back;
