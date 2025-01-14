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

const Tab = createBottomTabNavigator();

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

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Friends" component={Friends} />
    </ProfileStack.Navigator>
  );
};

const TutorStack = createStackNavigator() as any;

const TutorStackScreen = () => {
  return (
    <TutorStack.Navigator screenOptions={{ headerShown: false }}>
      <TutorStack.Screen name="TutorMain" component={TutorHome} />
      <TutorStack.Screen name="Test" component={Test} />
    </TutorStack.Navigator>
  );
};

const Navigation = () => {
  const { user } = useStorage();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: `${!user ? 'none':'flex'}`,
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
        {!user ? (
          <>
            <Tab.Screen name="Welcome" component={Welcome} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Choose" component={Choose} />
            <Tab.Screen name="Student" component={Student} />
            <Tab.Screen name="Tutor" component={Tutor} />
            <Tab.Screen name="CreateAvatar" component={CreateAvatar} />
            <Tab.Screen name="ChooseLanguage" component={ChooseLanguage} />
          </>
        ) : user.type === "user" ? (
          <>
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
              name="MainProfile"
              component={ProfileStackScreen}
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
          </>
        ) : (
          <>
            <Tab.Screen
              name="TutorHome"
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
              name="TutorProfile"
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
          </>
        )}
      </Tab.Navigator>
    </>
  );
};

export default Navigation;
