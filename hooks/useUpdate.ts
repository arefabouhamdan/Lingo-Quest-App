import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UpdateData {
  name: string;
  email: string;
  password: string;
  type: string;
  avatar: string[];
  language: string;
}

const update = async (credentials: UpdateData) => {
  const response = await axios.put(`${BASE_URL}/users`, credentials);
  return response.data;
};

export const useRegister = () => {
  return useMutation(update, {
    onSuccess: async (response) => {
      console.log("Updated successful!", JSON.stringify(response));
      await AsyncStorage.setItem("user", JSON.stringify(response));
    },
    onError: (error: any) => {
      console.error("Registration failed:", error);
    },
  });
};
