import { useState } from "react";
import React from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import Back from "@/assets/components/Back";
import { useStorage } from "@/hooks/useStorage";

const Test = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <Back text="Friends" />
      <View style={tw`mt-5 w-11/12`}>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  );
};

export default Test;
