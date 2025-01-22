import { View } from "react-native";
import React from "react";
import tw from "twrnc";

type ProgressProps = {
  passed: boolean;
};

const Progress = ({ passed }: ProgressProps) => {
  const barFilled = passed ? `bg-sky-400` : `bg-gray-200`;
  return <View style={tw`${barFilled} w-15 h-3 rounded`}></View>;
};

export default Progress;
