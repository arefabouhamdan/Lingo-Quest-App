import { useMutation, useQuery } from "react-query";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStorage } from "./useStorage";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "@/assets/utils/baseUrl";

interface LoginCredentials {
  name: string;
  password: string;
}

interface name {
  name: string;
}

const login = async (credentials: LoginCredentials) => {
  const response = await axios.post(`${BASE_URL}/users/login`, credentials);
  return response.data;
};

export const useLogin = () => {
  const navigation = useNavigation();
  return useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      try {
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
        console.log("Login data stored securely:", data.user);
        data.user.type === "user"
          ? navigation.navigate("MainHome" as never)
          : navigation.navigate("TutorHome" as never);
      } catch (error) {
        console.error("Error storing login data securely:", error);
      }
    },
  });
};
