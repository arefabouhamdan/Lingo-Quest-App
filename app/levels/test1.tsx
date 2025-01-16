import { useState } from "react";
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import Back from "@/assets/components/Back";
import { useStorage } from "@/hooks/useStorage";
import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";

const Test1 = () => {
  const { user } = useStorage();
  const userLanguage = user?.language;
  const fetchUserByName = async (language: string) => {
    const response = await axios.get(`${BASE_URL}/tests/${language}/1`);
    return response.data;
  };

  const { data: question, isLoading } = useQuery(
    ["language", userLanguage],
    () => fetchUserByName(userLanguage),
    {
      enabled: !!userLanguage,
      retry: false,
    }
  );
  

  const [index, setIndex] = useState(0);
  console.log("index", index)
  
  const handleIncrement = () => {
    index <= question?.data.length - 1 ? setIndex(index + 1): null;
  }
  const handleDecrement = () => {
    index == 0 ? null : setIndex(index - 1);
  }

  const { themeViewStyle, themeTextStyle } = useTheme();
  const prevStyle = index == 0 ? "opacity-50" : "opacity-100";
  const nextStyle = index < question?.data.length - 1 ? "opacity-100" : "opacity-50";
  const buttonStyle =
    "w-23 h-11 bg-sky-400 flex justify-center items-center rounded-2 my-auto border-sky-600";
  const textStyle = "text-white text-xl font-medium";
  const answerStyle =
    "w-11/12 h-1/15 mt-5 bg-sky-400 justify-center rounded px-3";

  return isLoading ? (
    <View style={tw`w-85 h-80 flex flex-col items-center justify-center`}>
      <Text style={tw`${themeTextStyle} text-2xl font-bold`}>Loading...</Text>
    </View>
  ) : (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <Back text="Test 1" background />
      <View
        style={tw`w-full h-2/5 bg-sky-400 items-start justify-center gap-5`}
      >
        <Text style={tw`${themeTextStyle} text-3xl font-bold text-white px-3`}>
          Question:
        </Text>
        <Text
          style={tw`${themeTextStyle} text-3xl font-medium text-white px-3`}
        >
          {question?.data[index].content}
        </Text>
      </View>
      <TouchableOpacity style={tw`${answerStyle}`}>
        <Text style={tw`${textStyle}`}>{question?.data[index].choices[0]}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`${answerStyle}`}>
        <Text style={tw`${textStyle}`}>{question?.data[index].choices[1]}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`${answerStyle}`}>
        <Text style={tw`${textStyle}`}>{question?.data[index].choices[2]}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`${answerStyle}`}>
        <Text style={tw`${textStyle}`}>{question?.data[index].choices[3]}</Text>
      </TouchableOpacity>
      <View style={tw`h-1/15 flex-row my-auto px-3 gap-5`}>
        <TouchableOpacity style={tw`${buttonStyle} ${prevStyle}`} onPress={handleDecrement} disabled={index == 0}>
          <Text style={tw`${textStyle}`}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`${buttonStyle} ${nextStyle}`} onPress={handleIncrement} disabled={index == question?.data.length - 1}>
          <Text style={tw`${textStyle}`}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Test1;
