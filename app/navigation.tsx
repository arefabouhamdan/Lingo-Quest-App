import React from "react";
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./auth/welcome";
import Login from "./auth/login";

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

      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: "Welcome",
            
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            
          }}
        />
      </Stack.Navigator>
    )}
      </>
  );
};

export default Navigation;
