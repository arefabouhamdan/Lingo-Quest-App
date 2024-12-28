import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { useTheme } from "../utils/useTheme";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

type BackProps = {
  text?: string;
};

const Back = ({ text } : BackProps) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { themeTextStyle } = useTheme();

  return (
    <View style={tw`w-full items-center justify-center absolute top-0 z-10`}>
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
    </View>
  );
};

export default Back;
