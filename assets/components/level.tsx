import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";

type LevelProps = {
  status?: string;
  level?: string;
};

const Level = ({ status, level }: LevelProps) => {
  const backgroundColor = status == "active" ? "bg-sky-400" : "bg-gray-300";

  return (
    <TouchableOpacity
      disabled={status == 'inactive'}
      style={tw`items-center justify-center mt-10`}
    >
      <View
        style={tw`${backgroundColor} w-20 h-20 rounded-full items-center justify-center`}
      >
        <Text style={tw`text-white font-bold text-3xl`}>{level}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Level;
