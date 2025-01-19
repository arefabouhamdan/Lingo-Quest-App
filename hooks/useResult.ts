import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TestData {
  student: string;
  level: string;
  responses: string[];
  corrected: boolean;
}

const result = async (credentials: TestData) => {
  const { student, level,  ...data } = credentials;
  const response = await axios.put(`${BASE_URL}/users/${student}/${level}`, data);
  return response.data;
};

export const useResult = () => {
  return useMutation(result, {
    onSuccess: async (response) => {
      console.log("Test submitted successfully!", JSON.stringify(response));
      await AsyncStorage.setItem("user", JSON.stringify(response));
    },
    onError: (error: any) => {
      console.error("Submit failed:", error);
    },
  });
};
