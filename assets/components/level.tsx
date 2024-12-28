import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";

type LevelProps = {
  status?: string;
  level?: string;
  left?: number;
};

const Level = ({ status, level, left }: LevelProps) => {
  const backgroundColor = status == "active" ? "bg-sky-400" : "bg-gray-300";
  const positionStyle = 'left-' + left + ' top-' + top;

  return (
    <TouchableOpacity
      disabled={status == 'inactive'}
      style={tw`mt-20 mb-5`}
    >
      <View
        style={tw`${backgroundColor} ${positionStyle} w-20 h-20 rounded-full items-center justify-center`}
      >
        <Text style={tw`text-white font-bold text-3xl`}>{level}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Level;
