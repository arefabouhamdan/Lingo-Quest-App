import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";
import * as SecureStore from "expo-secure-store";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  type: string;
  avatar: string[];
  language: string;
}

const register = async (credentials: RegisterData) => {
  const response = await axios.post(`${BASE_URL}/users`, credentials);
  return response.data;
};

export const useRegister = () => {
  return useMutation(register, {
    onSuccess: async (response) => {
      await SecureStore.setItemAsync("user", JSON.stringify(response.user));
      await SecureStore.setItemAsync("token", JSON.stringify(response.token));
    },
    onError: (error: any) => {
      console.error("Registration failed:", error);
    },
  });
};
