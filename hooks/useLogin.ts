import { useMutation } from "react-query";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginCredentials {
  name: string;
  password: string;
}

const login = async (credentials: LoginCredentials) => {
  const response = await axios.post(
    "http://192.168.1.102:3000/users/login",
    credentials
  );
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      try {
        await AsyncStorage.setItem('user', JSON.stringify(data));
      } catch (error) {
        console.error("Error storing login data securely:", error);
      }
    },
  });
};
