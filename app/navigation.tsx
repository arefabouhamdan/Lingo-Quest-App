import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./auth/welcome";
import Login from "./auth/login";
import Choose from "./auth/choose";
import Student from "./auth/student";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const loggedIn = false;

const Navigation = () => {
  return (
    <>
    {loggedIn ? (
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    ):(

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Choose"
          component={Choose}
        />
        <Stack.Screen
          name="Student"
          component={Student}
        />
      </Stack.Navigator>
    )}
      </>
  );
};

export default Navigation;
