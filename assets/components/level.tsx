import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "expo-router";
import tw from "twrnc";

type LevelProps = {
  status?: string;
  level?: string;
  type?: string;
};

const Level = ({ status, level, type }: LevelProps) => {
  const navigation = useNavigation();
  const backgroundColor = status == "active" ? "bg-sky-400" : "bg-gray-300";
  const hidden = status == "hidden" ? "hidden" : "";
  const typeStyle =
    type == "level"
      ? "w-20 h-20 rounded-full"
      : "w-3/4 h-20 rounded-md border-4 border-gray-200 self-center";
  const position =
    type == "level"
      ? Number(level) % 2 === 0
        ? "self-end"
        : "self-start"
      : "";

  return (
    <TouchableOpacity
      disabled={status == "inactive"}
      style={tw`mb-5 mt-15`}
      onPress={() => {
        navigation.navigate(`Level${level}` as never);
      }}
    >
      <View
        style={tw` ${typeStyle} ${backgroundColor} ${hidden} ${position} items-center justify-center mx-15`}
      >
        <Text style={tw`text-white font-bold text-3xl`}>{level}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Level;
