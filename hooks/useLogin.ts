import { useMutation } from "react-query";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Navigation from "@/app/navigation";

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
  const navigation = useNavigation();
  return useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      try {
        await AsyncStorage.setItem('user', JSON.stringify(data));
        console.log("Login data stored securely:", data);
        
        navigation.navigate("Home" as never);
      } catch (error) {
        console.error("Error storing login data securely:", error);
      }
        
    },
  });
};
