import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Welcome from "./auth/welcome";
import Login from "./auth/login";
import Choose from "./auth/choose";
import Student from "./auth/student";
import Tutor from "./auth/tutor";
import ChooseLanguage from "./auth/chooseLanguage";
import Home from "./student/home";
import Levels from "./student/levels";
import Leaderboard from "./student/leaderboard";
import Profile from "./student/profile";
import Friends from "./student/friends";
import Vocab from "./student/vocab";
import Level1 from "./levels/Level1";
import Level2 from "./levels/Level2";
import TutorHome from "./tutor/TutorHome";
import TutorProfile from "./tutor/TutorProfile";
import CreateAvatar from "./auth/createAvatar";
import Test from "./tutor/Test";
import { useStorage } from "@/hooks/useStorage";
import AddFriend from "./student/addFriend";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: "flex",
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
        component={Home}
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
        component={Levels}
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
        name="MainProfile"
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
  );
};

const Navigation = () => {
  const { user } = useStorage();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {/* Student */}
      <Stack.Screen name="Home" component={HomeStackScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Choose" component={Choose} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
      <Stack.Screen name="CreateAvatar" component={CreateAvatar} />
      <Stack.Screen name="Student" component={Student} />
      <Stack.Screen name="Tutor" component={Tutor} />
      <Stack.Screen name="Vocab" component={Vocab} />
      <Stack.Screen name="Levels" component={Levels} />
      <Stack.Screen name="Level1" component={Level1} />
      <Stack.Screen name="Level2" component={Level2} />
      <Stack.Screen name="Leaderboard" component={Leaderboard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Friends" component={Friends} />
      <Stack.Screen name="AddFriend" component={AddFriend} />

      {/* Tutor */}
      <Stack.Screen name="TutorHome" component={TutorHome} />
      <Stack.Screen name="TutorProfile" component={TutorProfile} />
      <Stack.Screen name="Test" component={Test} />

    </Stack.Navigator>
  );
};

export default Navigation;
