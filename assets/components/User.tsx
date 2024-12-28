import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";

type UserProps = {
  name: string;
  info: string;
  avatar: string;
};

const User = ({ name, info, avatar }: UserProps) => {
  const { themeTextStyle } = useTheme();

  return (
    <TouchableOpacity style={tw`flex flex-row items-center gap-5 p-4 rounded border border-gray-200 mb-4 h-20`}>
      <Image
        source={require(`@/assets/images/character/Aref.png`)}
        style={tw`w-7 h-10`}
      />
      <View>
          <Text style={tw`${themeTextStyle} text-xl`}>{name}</Text>
          <Text style={tw`${themeTextStyle} text-lg`}>{info}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default User;
