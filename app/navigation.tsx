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

const Tab = createStackNavigator();

const Navigation = () => {
  const { user, loggedIn } = useStorage();
  console.log("loggedIn", loggedIn)
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Choose" component={Choose} />
        <Tab.Screen name="Student" component={Student} />
        <Tab.Screen name="Tutor" component={Tutor} />
        <Tab.Screen name="CreateAvatar" component={CreateAvatar} />
        <Tab.Screen name="ChooseLanguage" component={ChooseLanguage} />

        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen name="Vocab" component={Vocab} />
        <Tab.Screen name="Levels" component={Levels} />
        <Tab.Screen name="Level1" component={Level1} />
        <Tab.Screen name="Level2" component={Level2} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Friends" component={Friends} />

        <Tab.Screen name="TutorHome" component={TutorHome} />
        <Tab.Screen name="Test" component={Test} />
        <Tab.Screen name="TutorProfile" component={TutorProfile} />
      </Tab.Navigator>
    </>
  );
};

export default Navigation;
