import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

interface TestData {
  student: string;
  level: string;
  responses: {
    correct: boolean[];
    questions: string[];
    answers: string[];
  };
  corrected: boolean;
}

const result = async (credentials: TestData) => {
  const { student, level,  ...data } = credentials;
  const response = await axios.put(`${BASE_URL}/results/${student}/${level}`, data);
  return response.data;
};

export const useResult = () => {
  const navigation = useNavigation();
  return useMutation(result, {
    onSuccess: async (response) => {
      console.log("Result updated:", response);
      navigation.navigate("TutorHome" as never);
    },
    onError: (error: any) => {
      console.error("Result failed:", error);
    },
  });
};
