import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Icon from "react-native-vector-icons/Ionicons";
import { useColorScheme } from "react-native";
import tw from "twrnc";

type UserProps = {
  name: string;
  info: string;
  avatar: string;
};

const User = ({ name, info, avatar }: UserProps) => {
  const colorScheme = useColorScheme();
  const { themeTextStyle } = useTheme();

  return (
    <TouchableOpacity
      style={tw`flex flex-row items-center gap-5 p-4 rounded border border-gray-200 mb-4 h-20 justify-between`}
    >
      <View style={tw`flex flex-row items-center gap-5`}>
        <Image
          source={require("@/assets/images/character/Aref.png")}
          style={tw`w-7 h-10`}
        />
        <View>
          <Text style={tw`${themeTextStyle} text-xl font-bold`}>{name}</Text>
          <Text style={tw`${themeTextStyle} text-lg font-medium`}>{info}</Text>
        </View>
      </View>
      <Icon
        name="chevron-forward-outline"
        color={colorScheme === "light" ? "#000" : "#fff"}
        size={26}
      />
    </TouchableOpacity>
  );
};

export default User;
