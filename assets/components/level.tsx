import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";

type LevelProps = {
  status?: string;
  level?: string;
  left?: number;
  top?: number;
};

const Level = ({ status, level, left, top }: LevelProps) => {
  const backgroundColor = status == "active" ? "bg-sky-400" : "bg-gray-300";
  const postionStyle = 'absolute left-' + left + ' top-' + top;

  return (
    <TouchableOpacity
      disabled={status == 'inactive'}
      style={tw` items-center justify-center mt-10`}
    >
      <View
        style={tw`${backgroundColor} ${postionStyle} w-20 h-20 rounded-full items-center justify-center`}
      >
        <Text style={tw`text-white font-bold text-3xl`}>{level}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Level;
