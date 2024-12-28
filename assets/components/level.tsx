import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";

type LevelProps = {
  status?: string;
  level?: string;
  left?: number;
  type? : string;
};

const Level = ({ status, level, left, type }: LevelProps) => {
  const backgroundColor = status == "active" ? "bg-sky-400" : "bg-gray-300";
  const positionStyle = 'left-' + left ;
  const hidden = status == 'hidden' ? 'hidden' : '';
  const typeStyle = type == 'level' ? 'w-20 h-20 rounded-full': 'w-64 h-20 rounded-md border-4 border-gray-200';

  return (
    <TouchableOpacity
      disabled={status == 'inactive'}
      style={tw`mt-20 mb-5`}
    >
      <View
        style={tw` ${typeStyle} ${backgroundColor} ${positionStyle} ${hidden} items-center justify-center`}
      >
        <Text style={tw`text-white font-bold text-3xl`}>{level}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Level;
