import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './auth/welcome';
import Login from './auth/login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (  
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

export default Navigation;