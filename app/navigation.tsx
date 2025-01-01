import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Welcome from "./auth/welcome";
import Login from "./auth/login";
import Choose from "./auth/choose";
import Student from "./auth/student";
import Tutor from "./auth/tutor";
import Home from "./student/home";
import Levels from "./student/levels";
import Leaderboard from "./student/leaderboard";
import Profile from "./student/profile";
import Vocab from "./student/vocab";
import Level1 from "./levels/Level1";
import Level2 from "./levels/Level2";
import TutorHome from "./tutor/TutorHome";
import TutorProfile from "./tutor/TutorProfile";
import Test from "./tutor/Test";

const User = { type: "tutor" };

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const loggedIn = true;

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={Home} />
      <HomeStack.Screen name="Vocab" component={Vocab} />
    </HomeStack.Navigator>
  );
};

const LevelStack = createStackNavigator();

const LevelStackScreen = () => {
  return (
    <LevelStack.Navigator screenOptions={{ headerShown: false }}>
      <LevelStack.Screen name="LevelsMain" component={Levels} />
      <LevelStack.Screen name="Level1" component={Level1} />
      <LevelStack.Screen name="Level2" component={Level2} />
    </LevelStack.Navigator>
  );
};

const TutorStack = createStackNavigator();

const TutorStackScreen = () => {
  return (
    <TutorStack.Navigator screenOptions={{ headerShown: false }}>
      <TutorStack.Screen name="TutorMain" component={TutorHome} />
      <TutorStack.Screen name="Test" component={Test} />
    </TutorStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <>
      {loggedIn ? (
        (User.type == "student" && (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "#4FC0E8",
                borderBottomWidth: 5,
                borderColor: "#3AADD9",
                height: 60,
              },
              tabBarLabelStyle: {
                color: "#4FC0E8",
              },
              tabBarShowLabel: false,
              tabBarIconStyle: {
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Icon
                    name="home-outline"
                    color={"white"}
                    size={26}
                    style={{
                      color: focused ? "#4FC0E8" : "white",
                      backgroundColor: focused ? "white" : "#4FC0E8",
                      borderRadius: 25,
                      padding: 10,
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Levels"
              component={LevelStackScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Icon
                    name="bonfire-outline"
                    color={"white"}
                    size={26}
                    style={{
                      color: focused ? "#4FC0E8" : "white",
                      backgroundColor: focused ? "white" : "#4FC0E8",
                      borderRadius: 25,
                      padding: 10,
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Leaderboard"
              component={Leaderboard}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Icon
                    name="trophy-outline"
                    color={"white"}
                    size={26}
                    style={{
                      color: focused ? "#4FC0E8" : "white",
                      backgroundColor: focused ? "white" : "#4FC0E8",
                      borderRadius: 25,
                      padding: 10,
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Icon
                    name="person-outline"
                    color={"white"}
                    size={26}
                    style={{
                      color: focused ? "#4FC0E8" : "white",
                      backgroundColor: focused ? "white" : "#4FC0E8",
                      borderRadius: 25,
                      padding: 10,
                    }}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        )) ||
        (User.type == "tutor" && (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "#4FC0E8",
                borderBottomWidth: 5,
                borderColor: "#3AADD9",
                height: 60,
              },
              tabBarLabelStyle: {
                color: "#4FC0E8",
              },
              tabBarShowLabel: false,
              tabBarIconStyle: {
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={TutorStackScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Icon
                    name="home-outline"
                    color={"white"}
                    size={26}
                    style={{
                      color: focused ? "#4FC0E8" : "white",
                      backgroundColor: focused ? "white" : "#4FC0E8",
                      borderRadius: 25,
                      padding: 10,
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={TutorProfile}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Icon
                    name="person-outline"
                    color={"white"}
                    size={26}
                    style={{
                      color: focused ? "#4FC0E8" : "white",
                      backgroundColor: focused ? "white" : "#4FC0E8",
                      borderRadius: 25,
                      padding: 10,
                    }}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        ))
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Choose" component={Choose} />
          <Stack.Screen name="Student" component={Student} />
          <Stack.Screen name="Tutor" component={Tutor} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Navigation;
