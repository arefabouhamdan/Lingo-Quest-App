import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './auth/welcome';
import Login from './auth/login';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Navigation;