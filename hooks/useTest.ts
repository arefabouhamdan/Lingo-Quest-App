import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";
import * as SecureStore from "expo-secure-store";

interface TestData {
  student: string;
  language: string;
  responses: string[];
  corrected: boolean;
  level: number;
}

const test = async (data: TestData) => {
  const response = await axios.post(`${BASE_URL}/results`, data);
  return response.data;
};

export const useTest = () => {
  return useMutation(test, {
    onSuccess: async (response) => {
      console.log("Test submitted successfully!", JSON.stringify(response));
      await SecureStore.setItemAsync("user", JSON.stringify(response));
    },
    onError: (error: any) => {
      console.error("Submit failed:", error);
    },
  });
};
