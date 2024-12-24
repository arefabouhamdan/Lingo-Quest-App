import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./auth/welcome";
import Login from "./auth/login";
import Choose from "./auth/choose";
import Student from "./auth/student";
import Tutor from "./auth/tutor";
import Home from "./student/home"
import Levels from "./student/levels"
import Leaderboard from "./student/leaderboard";
import Profile from "./student/profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const loggedIn = true;

const Navigation = () => {
  return (
    <>
    {loggedIn ? (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Levels" component={Levels} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        <Tab.Screen name="Profile" component={Profile} />
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
        <Stack.Screen
          name="Tutor"
          component={Tutor}
        />
      </Stack.Navigator>
    )}
      </>
  );
};

export default Navigation;
