import React from "react";
import { SafeAreaView, Image, TouchableOpacity, Text } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Back from "@/assets/components/Back";
import tw from "twrnc";

const Level1 = () => {
  const { themeViewStyle } = useTheme();

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back text="Level 1" />
      <Image source={require('@/assets/images/game/Barista.png')}/>
      <Image source={require('@/assets/images/game/coffeeshop-night-1.png')}/>
    </SafeAreaView>
  );
};

export default Level1;
