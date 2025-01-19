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
import Congrats from "@/assets/components/modals/congrats";
import { useTest } from "@/hooks/useTest";
import { useNavigation } from "@react-navigation/native";

const Test1 = () => {
  const { user } = useStorage();
  const testMutation = useTest();
  const userLanguage = user?.language;

  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
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

  const handleChoiceSelect = (choice: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = choice;
    setAnswers(newAnswers);
  };

  const handleIncrement = () => {
    index <= question?.data.length - 1 ? setIndex(index + 1) : null;
  };
  const handleDecrement = () => {
    index == 0 ? null : setIndex(index - 1);
  };

  const handleSubmit = () => {
    testMutation.mutate({
      student: user?.name,
      language: user?.language,
      responses: {
        questions: question?.data.map((q) => q.content),
        answers,
        correct: question?.data.map((q, i) => q.choices.indexOf(answers[i]) === 0),
      },
      corrected: false,
    });
    setModalVisible(true);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const { themeViewStyle, themeTextStyle } = useTheme();
  const prevStyle = index == 0 ? "opacity-50" : "opacity-100";
  const nextStyle =
    index < question?.data.length - 1 ? "opacity-100" : "opacity-50";
  const buttonStyle =
    "w-23 h-11 bg-sky-400 flex justify-center items-center rounded-2 my-auto border-sky-600";
  const textStyle = "text-white text-xl font-medium";
  const answerStyle =
    "w-11/12 h-1/15 mt-5 bg-sky-400 justify-center rounded px-3";
  const disabledStyle =
    answers.length !== question?.data.length ? "opacity-50" : "";
  const selectedAnswerStyle = "bg-sky-600";

  return isLoading ? (
    <View style={tw`w-85 h-80 flex flex-col items-center justify-center`}>
      <Text style={tw`${themeTextStyle} text-2xl font-bold`}>Loading...</Text>
    </View>
  ) : (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <Back text="Test 1" background />
      <Congrats
        level={1}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        test
      />
      <View
        style={tw`w-full h-2/7 bg-sky-400 items-start justify-center gap-5`}
      >
        <Text style={tw`${themeTextStyle} text-3xl font-bold text-white px-3`}>
          Question {index + 1}:
        </Text>
        <Text
          style={tw`${themeTextStyle} text-3xl font-medium text-white px-3`}
        >
          {question?.data[index].content}
        </Text>
      </View>
      {question?.data[index].choices.map(
        (choice: string, choiceIndex: number) => (
          <TouchableOpacity
            key={choiceIndex}
            style={tw`${answerStyle} ${
              answers[index] === choice ? selectedAnswerStyle : ""
            }`}
            onPress={() => handleChoiceSelect(choice)}
          >
            <Text style={tw`${textStyle}`}>{choice}</Text>
          </TouchableOpacity>
        )
      )}
      <View style={tw`h-1/15 flex-row my-auto px-3 gap-5`}>
        <TouchableOpacity
          style={tw`${buttonStyle} ${prevStyle}`}
          onPress={handleDecrement}
          disabled={index == 0}
        >
          <Text style={tw`${textStyle}`}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`${buttonStyle} ${nextStyle}`}
          onPress={handleIncrement}
          disabled={index == question?.data.length - 1}
        >
          <Text style={tw`${textStyle}`}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={tw`${disabledStyle} w-52 bg-sky-400 rounded-2 h-14 my-auto flex flex-row justify-center items-center gap-5`}
        disabled={answers.length !== question?.data.length}
        onPress={handleSubmit}
      >
        <Text style={tw`${textStyle}`}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Test1;
