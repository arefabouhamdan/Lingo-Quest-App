import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TestData {
  student: string;
  language: string;
  responses: string[];
  corrected: boolean;
}

const test = async (data: TestData) => {
  const response = await axios.post(`${BASE_URL}/users`, data);
  return response.data;
};

export const useTest = () => {
  return useMutation(test, {
    onSuccess: async (response) => {
      console.log("Test submitted successfully!", JSON.stringify(response));
      await AsyncStorage.setItem("user", JSON.stringify(response));
    },
    onError: (error: any) => {
      console.error("Submit failed:", error);
    },
  });
};
