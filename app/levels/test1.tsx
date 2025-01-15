import { useState } from "react";
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import Back from "@/assets/components/Back";
import { useStorage } from "@/hooks/useStorage";

const Test1 = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <Back text="Test 1" background />
      <View style={tw`w-full h-2/5 bg-sky-400 items-center justify-center gap-5`}>
        <Text style={tw`${themeTextStyle} text-3xl font-bold text-white px-3`}>
          Question 1:
        </Text>
        <Text style={tw`${themeTextStyle} text-3xl font-medium text-white px-3`}>
          What is the capital of France?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Test1;
