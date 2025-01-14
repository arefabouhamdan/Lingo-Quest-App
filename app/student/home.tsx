import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { useColorScheme } from "react-native";
import { useNavigation } from "expo-router";
import { useTheme } from "@/hooks/useTheme";
import LanguageBar from "@/assets/components/languageBar";
import StreakBar from "@/assets/components/streakBar";
import BottomBar from "@/assets/components/bottomBar";

const Home = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  const user = {
    name: "Aref",
    id: "1234",
    joined: "01-09-2021",
    streak: "20",
    xp: "12000",
    type: "student",
    language: "Arabic",
    rank: "Diamond",
    avatar: {
      gender: "female",
      background: { color: "#4FC0E8" },
      hair: { color: "#674238", style: "WomanHairTwo" },
      skin: { color: "#E7BC98", style: "WomanFace" },
      eyes: { color: "#1E81C8", style: "Eyes" },
      shirt: { color: "#484848", style: "WomanShirt" },
    },
    friends: ["Aref", "Bilal", "Hassan", "Ali"],
  };
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Text
        style={tw`${themeTextStyle} text-2xl font-bold absolute top-15 z-11`}
      >
        Welcome back {user.name}!
      </Text>
      <Image
        source={require("@/assets/images/game/iglo.png")}
        style={tw`w-full mb-5 absolute top-0`}
      />
      <Image
        source={require("@/assets/images/game/guide-hello.png")}
        style={tw`w-48 h-60 mb-5 z-10 absolute top-45`}
      />
      <View style={tw`mt-95`}></View>
      <StreakBar />

      <LanguageBar user={user}/>
      
      <View style={tw`flex flex-row justify-center items-center gap-5 w-11/12 mb-8`}>
        <TouchableOpacity
          style={tw`${themeViewStyle}flex items-center p-5 flex-row gap-2 justify-center mt-10 rounded-lg w-9/19 h-22 border border-gray-200`}
          onPress={() => {
            navigation.navigate("Vocab" as never);
          }}
        >
          {colorScheme === "light" ? (
            <Image source={require("@/assets/images/icons/book-black.png")} />
          ) : (
            <Image source={require("@/assets/images/icons/book-white.png")} />
          )}
          <Text style={tw`${themeTextStyle} text-xl font-bold`}>
            Vocab List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`${themeViewStyle}flex p-5 flex-row gap-2 items-center justify-center mt-10 rounded-lg w-9/19 h-22 border border-gray-200`}
          onPress={() => {
            navigation.navigate("Leaderboard" as never);
          }}
        >
          {colorScheme === "light" ? (
            <Image source={require("@/assets/images/icons/shield-black.png")} />
          ) : (
            <Image source={require("@/assets/images/icons/shield-white.png")} />
          )}
          <Text style={tw`${themeTextStyle} text-xl font-bold `}>
            {user.rank} League
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
