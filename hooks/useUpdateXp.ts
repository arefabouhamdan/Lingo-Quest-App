import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UpdateData {
  username: string;
  level: number;
  xp: number;
}

const update = async (credentials: UpdateData) => {
  const { username, ...data } = credentials;
  const response = await axios.put(`${BASE_URL}/users/${username}`, data);
  return response.data;
};

export const useUpdate = () => {
  return useMutation(update, {
    onSuccess: async (response) => {
      console.log("Updated successful!", JSON.stringify(response));
      await AsyncStorage.setItem("user", JSON.stringify(response));
    },
    onError: (error: any) => {
      console.error("Update failed:", error);
    },
  });
};