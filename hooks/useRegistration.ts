import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '@/assets/utils/baseUrl';

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

const register = async (credentials: RegisterData) => {
  
    const response = await axios.post(
      `${BASE_URL}/users`,
      credentials
    );
    return response.data;
  };

export const useRegister = () => {
  return useMutation(register, {
    onSuccess: (response) => {
      console.log('Registration successful!', response.data);
    },
    onError: (error: any) => {
      console.error('Registration failed:', error);
    },
  });
}
