import { useMutation } from "react-query";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "@/assets/utils/baseUrl";

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
  const navigation = useNavigation();
  return useMutation(register, {
    onSuccess: (response) => {
      console.log("Registration successful!", response.data);
      {response.data.type === "user" ? navigation.navigate("MainHome" as never) : navigation.navigate("TutorHome" as never)}
    },
    onError: (error: any) => {
      console.error("Registration failed:", error);
    },
  });
};
