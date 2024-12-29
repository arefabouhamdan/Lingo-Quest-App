import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Back from '@/assets/components/Back'
import tw from "twrnc";

const Level1 = () => {
  const { themeViewStyle } = useTheme();

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back text="Level 1"/>
    
    </SafeAreaView>
  );
};

export default Level1;
