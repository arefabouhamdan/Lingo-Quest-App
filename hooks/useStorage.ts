import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const useStorage = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = await SecureStore.getItemAsync('user');
        const storedToken = await SecureStore.getItemAsync('token');
        setUser(storedUser ? JSON.parse(storedUser) : null);
        setToken(storedToken ? JSON.parse(storedToken) : null);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
       
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync('user');
      await SecureStore.deleteItemAsync('token');
      setUser(null);
      setToken(null)
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return { user,token, loading, logout};
};
