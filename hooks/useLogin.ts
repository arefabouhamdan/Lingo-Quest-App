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
  
  const response = await axios.post(
    `${BASE_URL}/users/login`,
    credentials
  );
  return response.data;
};

const fetchUserByName = async (name: string) => {
  const response = await axios.get(`${BASE_URL}/users/${name}`);
  return response.data;
};

export const useLogin = () => {
  const navigation = useNavigation();
  return useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      try {
        await AsyncStorage.setItem('user', JSON.stringify(data));
        console.log("Login data stored securely:", data);
        
        navigation.navigate("MainHome" as never);
      } catch (error) {
        console.error("Error storing login data securely:", error);
      }
        
    },
  });
};

export const refetchUser = () => {
  const { user } = useStorage();
  return useQuery(["user", user?.name], () => fetchUserByName(user?.name), {
    enabled: !!user?.name,
    retry: false,
    onSuccess: async (data) => {
      try {
        await AsyncStorage.setItem('user', JSON.stringify(data));
        console.log("User data stored securely:", data);
      } catch (error) {
        console.error("Error storing user data securely:", error);
      }
    }
  });
}
