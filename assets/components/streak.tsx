import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";

type StreakProps = {
  letter: string;
  played: boolean;
};

const Streak = ({ letter, played } : StreakProps) => {
  const { themeTextStyle } = useTheme();
  return (
    <View style={tw`flex items-center justify-center`}>
      {played ? (
        <Image source={require("@/assets/images/icons/fire.png")} style={tw`w-8 h-10`}/>
      ) : (
        <View style={tw`bg-sky-400 rounded-10 p-4`}></View>
      )}
      <Text style={tw`${themeTextStyle} text-lg font-bold`}>{letter}</Text>
    </View>
  );
};

export default Streak;
