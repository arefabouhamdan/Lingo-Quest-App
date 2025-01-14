import { useMutation } from "react-query";
import axios from "axios";

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
    onSuccess: (data) => {
      console.log("Login successful!", data);
    },
    onError: (error) => {
      console.error("Login failed:", error.response?.data || error.message);
    },
  });
};
