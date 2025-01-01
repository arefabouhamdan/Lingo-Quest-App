import React from "react";
import { View, Text, SafeAreaView } from "react-native";
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
        }
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
        }
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
        }
      ],
    }
  ];

  const studentData = tests.find((test) => test.student === userName);

  return (
    <SafeAreaView>
      <View>
        <Text>{studentData?.student}</Text>
        <Text>{studentData?.testData[0]?.question}</Text>
        <Text>{studentData?.testData[0]?.answer}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Test;
