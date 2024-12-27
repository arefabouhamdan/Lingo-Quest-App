import React from "react";
import { View } from "react-native";
import Streak from "./streak";
import { useTheme } from "../utils/useTheme";
import tw from "twrnc";

const StreakBar = () => {
  const { themeViewStyle } = useTheme();
  const borderStyle = tw`${ themeViewStyle} flex flex-row items-center p-5 justify-center gap-5 mt-10 rounded-lg w-11/12 h-22 border border-gray-200`;
  return (
    <View style={borderStyle}>
      <Streak letter={"S"} played />
      <Streak letter={"M"} played={false} />
      <Streak letter={"T"} played />
      <Streak letter={"W"} played={false} />
      <Streak letter={"Th"} played={false} />
      <Streak letter={"F"} played={false} />
      <Streak letter={"St"} played />
    </View>
  );
};

export default StreakBar;
