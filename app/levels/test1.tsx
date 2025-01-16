import { useState } from "react";
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import Back from "@/assets/components/Back";
import { useStorage } from "@/hooks/useStorage";

const Test1 = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const prevStyle = 0 ? "opacity-50" : "opacity-100";
  const nextStyle =
    1
      ? "opacity-50"
      : "opacity-100";
  const buttonStyle =
    "w-23 h-11 bg-sky-400 flex justify-center items-center rounded-2 my-auto border-sky-600";
  const textStyle = "text-white text-xl font-medium";
  const answerStyle = "w-11/12 h-1/15 mt-5 bg-sky-400 justify-center rounded px-3";
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <Back text="Test 1" background />
      <View style={tw`w-full h-2/5 bg-sky-400 items-start justify-center gap-5`}>
        <Text style={tw`${themeTextStyle} text-3xl font-bold text-white px-3`}>
          Question 1:
        </Text>
        <Text style={tw`${themeTextStyle} text-3xl font-medium text-white px-3`}>
          What is the capital of France?
        </Text>
      </View>
      <TouchableOpacity style={tw`${answerStyle}`}>
        <Text style={tw`${textStyle}`}>Answer 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`${answerStyle}`}>
        <Text style={tw`${textStyle}`}>Answer 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`${answerStyle}`}>
        <Text style={tw`${textStyle}`}>Answer 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`${answerStyle}`}>
        <Text style={tw`${textStyle}`}>Answer 4</Text>
      </TouchableOpacity>
      <View style={tw`h-1/15 flex-row my-auto px-3 gap-5`}>
        <TouchableOpacity style={tw`${buttonStyle} ${prevStyle}`}>
          <Text style={tw`${textStyle}`}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`${buttonStyle} ${nextStyle}`}>
          <Text style={tw`${textStyle}`}>Next</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

export default Test1;
