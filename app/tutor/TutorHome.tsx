import LanguageBar from "@/assets/components/languageBar";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";

const TutorHome = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const tests = 10;

  const borderStyle = `${themeViewStyle} flex items-center p-5 justify-center gap-5 mt-10 rounded-lg w-11/12 h-30 border border-gray-200`;
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <LanguageBar />
      <View style={tw`${borderStyle}`}>
        <Text style={tw`${themeTextStyle} text-xl font-bold`}>Number of Tests</Text>
        <Text style={tw`${themeTextStyle} text-3xl font-bold`}>{tests}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TutorHome;
