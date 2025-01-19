import Back from "@/assets/components/Back";
import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";
import { useQuery } from "react-query";
import { useTheme } from "@/hooks/useTheme";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import Button from "@/assets/components/Button";

type TestProps = {
  student: string;
  level: number;
};

const TestCorrection = () => {
  const { themeViewStyle } = useTheme();
  const route = useRoute();
  const { student, level } = route.params as TestProps;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const fetchTest = async (student: string, level: number) => {
    const response = await axios.get(`${BASE_URL}/results/${student}/${level}`);
    return response.data;
  };

  const { data: results, isLoading } = useQuery(
    ["user", student],
    () => fetchTest(student, level),
    {
      enabled: true,
    }
  );

  const updateAnswer = (value: boolean) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[index] = value;
      return updatedAnswers;
    });
  };

  const handleCorrect = () => {
    updateAnswer(true);
    incrementIndex();
  };

  const handleWrong = () => {
    updateAnswer(false);
    incrementIndex();
  };

  const prevStyle = index === 0 ? "opacity-50" : "opacity-100";
  const nextStyle =
    results && index === results?.responses[0].questions.length - 1
      ? "opacity-50"
      : "opacity-100";
  const buttonStyle =
    "w-23 h-11 bg-sky-400 flex justify-center items-center rounded-2 my-auto border-sky-600";
  const textStyle = "text-white text-xl font-medium";
  console.log(results?.responses[0].questions.length);

  const incrementIndex = () => {
    if (results && index === results?.responses[0].questions.length - 1) {
      return;
    }
    setIndex((prev) => {
      return prev + 1;
    });
  };

  const decrementIndex = () => {
    if (index === 0) {
      return;
    }
    setIndex((prev) => {
      return prev - 1;
    });
  };
  console.log(answers);

  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <Back />
      <View style={tw`my-auto gap-10`}>
        <View
          style={tw`flex flex-col items-center justify-around w-90 h-100 bg-sky-400 rounded-2`}
        >
          {isLoading ? (
            <View>
              <Text style={tw`text-white font-bold text-2xl`}>Loading...</Text>
            </View>
          ) : (
            <>
              <View style={tw`flex flex-col items-center justify-center`}>
                <View
                  style={tw`flex justify-center items-center w-20 h-20 bg-white rounded-full`}
                >
                  <Icon
                    name="chatbox-ellipses-outline"
                    color="#4EC0E8"
                    size={36}
                  />
                </View>
                <View
                  style={tw`flex flex-col items-center justify-center p-5 gap-5`}
                >
                  <Text style={tw`text-2xl font-bold text-white`}>
                    Question {index + 1}
                  </Text>
                  <Text style={tw`text-2xl font-medium text-white`}>
                    {results?.responses[0]?.questions[index]}
                  </Text>
                  <Text style={tw`text-2xl font-bold text-white`}>
                    {results?.responses[0]?.answers[index]}
                  </Text>
                </View>
              </View>
              <View style={tw`flex flex-row gap-10`}>
                <TouchableOpacity onPress={handleCorrect}>
                  <Icon name="checkmark" size={36} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleWrong}>
                  <Icon name="close-outline" size={36} color={"white"} />
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
        <View style={tw`flex flex-row gap-4 justify-center`}>
          <TouchableOpacity
            onPress={decrementIndex}
            style={tw`${prevStyle} ${buttonStyle}`}
            disabled={index === 0}
          >
            <Text style={tw`${textStyle}`}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={incrementIndex}
            style={tw`${nextStyle} ${buttonStyle}`}
            disabled={index === results?.responses[0].questions.length - 1}
          >
            <Text style={tw`${textStyle}`}>Next</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={tw`flex justify-center items-center`}
          onPress={() => {}}
          disabled={answers.length !== results?.responses[0].questions.length}
        >
          <Button text="Submit" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TestCorrection;
