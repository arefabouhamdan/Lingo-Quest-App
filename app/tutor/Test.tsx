import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
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
  const { userName } = route.params;

  const tests = [
    {
      student: "Aref",
      testData: [
        {
          response_type: "voice",
          question: "What is the capital of France?",
          answer: "Paris",
        },
        {
          response_type: "text",
          question: "What is the capital of Germany?",
          answer: "Berlin",
        },
        {
          response_type: "voice",
          question: "What is the capital of Italy?",
          answer: "Rome",
        },
        {
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
          response_type: "voice",
          question: "What is the capital of France?",
          answer: "Lyon",
        },
        {
          response_type: "text",
          question: "What is the capital of Germany?",
          answer: "Munich",
        },
        {
          response_type: "voice",
          question: "What is the capital of Italy?",
          answer: "Rome",
        },
        {
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
          response_type: "voice",
          question: "What is the capital of France?",
          answer: "Nice",
        },
        {
          response_type: "text",
          question: "What is the capital of Germany?",
          answer: "Dusseldorf",
        },
        {
          response_type: "voice",
          question: "What is the capital of Italy?",
          answer: "Rome",
        },
        {
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
    "w-23 h-11 bg-sky-400 flex justify-center items-center rounded-3 my-auto border-r-4 border-b-4 border-sky-600";
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
    <SafeAreaView>
      <View>
        {studentData?.testData[index]?.response_type === "voice" ? (
          <Icon name="mic-outline" color="#4EC0E8" size={36} />
        ) : (
          <Icon name="chatbox-ellipses-outline" color="#4EC0E8" size={36} />
        )}
        <Text>{studentData?.student}</Text>
        <Text>{studentData?.testData[index]?.question}</Text>
        <Text>{studentData?.testData[index]?.answer}</Text>
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
