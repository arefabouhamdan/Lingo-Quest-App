import Back from "@/assets/components/Back";
import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

type TestProps = {
  route: {
    params: {
      userName: string;
    };
  };
};

const Test = ({ route }: TestProps) => {
  const { themeViewStyle } = useTheme();
  const { userName } = route.params;

  const tests = [
    {
      student: "Aref",
      testData: [
        {
          id: 1,
          response_type: "voice",
          question: "What is the capital of France?",
          answer: "Paris",
        },
        {
          id: 2,
          response_type: "text",
          question: "What is the capital of Germany?",
          answer: "Berlin",
        },
        {
          id: 3,
          response_type: "voice",
          question: "What is the capital of Italy?",
          answer: "Rome",
        },
        {
          id: 4,
          response_type: "text",
          question: "What is the capital of Spain?",
          answer: "Madrid",
        },
      ],
    },
    {
      student: "Oday",
      testData: [
        {
          id: 1,
          response_type: "voice",
          question: "What is the capital of France?",
          answer: "Lyon",
        },
        {
          id: 2,
          response_type: "text",
          question: "What is the capital of Germany?",
          answer: "Munich",
        },
        {
          id: 3,
          response_type: "voice",
          question: "What is the capital of Italy?",
          answer: "Rome",
        },
        {
          id: 4,
          response_type: "text",
          question: "What is the capital of Spain?",
          answer: "Madrid",
        },
      ],
    },
    {
      student: "Rony",
      testData: [
        {
          id: 1,
          response_type: "voice",
          question: "What is the capital of France?",
          answer: "Nice",
        },
        {
          id: 2,
          response_type: "text",
          question: "What is the capital of Germany?",
          answer: "Dusseldorf",
        },
        {
          id: 3,
          response_type: "voice",
          question: "What is the capital of Italy?",
          answer: "Rome",
        },
        {
          id: 4,
          response_type: "text",
          question: "What is the capital of Spain?",
          answer: "Madrid",
        },
      ],
    },
  ];

  const studentData = tests.find((test) => test.student === userName);
  const [index, setIndex] = useState(0);
  const prevStyle = index === 0 ? "opacity-50" : "opacity-100";
  const nextStyle =
    studentData && index === studentData.testData.length - 1
      ? "opacity-50"
      : "opacity-100";
  const buttonStyle =
    "w-23 h-11 bg-sky-400 flex justify-center items-center rounded-2 my-auto border-sky-600";
  const textStyle = "text-white text-xl font-medium";

  const incrementIndex = () => {
    if (studentData && index === studentData?.testData.length - 1) {
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

  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center justify-center`}>
      <Back />
      <View
        style={tw`flex flex-col items-center justify-around m-5 w-96 h-100 bg-sky-400 rounded-2 border-sky-600`}
      >
        {studentData?.testData[index]?.response_type === "voice" ? (
          <View
            style={tw`flex justify-center items-center w-20 h-20 bg-white rounded-full`}
          >
            <Icon name="mic-outline" color="#4EC0E8" size={36} />
          </View>
        ) : (
          <View
            style={tw`flex justify-center items-center w-20 h-20 bg-white rounded-full`}
          >
            <Icon name="chatbox-ellipses-outline" color="#4EC0E8" size={36} />
          </View>
        )}
        <View style={tw`flex flex-col items-center justify-center p-5 mb-20`}>
          <Text style={tw`text-2xl font-bold text-white`}>
            Question {studentData?.testData[index].id}
          </Text>
          <Text style={tw`text-lg font-medium text-white`}>
            {studentData?.testData[index]?.question}
          </Text>
          <Text style={tw`text-xl font-bold text-white`}>
            {studentData?.testData[index]?.answer}
          </Text>
        </View>
      </View>

      <View style={tw`flex flex-row gap-4 justify-center`}>
        <TouchableOpacity
          onPress={decrementIndex}
          style={tw`${prevStyle} ${buttonStyle}`}
        >
          <Text style={tw`${textStyle}`}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={incrementIndex}
          style={tw`${nextStyle} ${buttonStyle}`}
        >
          <Text style={tw`${textStyle}`}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Test;
