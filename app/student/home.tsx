import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";
import { useColorScheme } from "react-native";
import Streak from "@/assets/components/streak";
import { useNavigation } from "expo-router";

const Home = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const borderStyle = tw`${themeViewStyle} flex flex-row items-start p-5 justify-center gap-5 mt-95 rounded-lg w-11/12 h-22 border border-gray-200`;
  const name = "Aref";
  const language = "German";
  const level = "A1";
  const rank = "Silver";
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Text
        style={tw`${themeTextStyle} text-2xl font-bold absolute top-15 z-11`}
      >
        Welcome back {name}!
      </Text>
      <Image
        source={require("@/assets/images/game/iglo.png")}
        style={tw`w-full mb-5 absolute top-0`}
      />
      <Image
        source={require("@/assets/images/game/guide-hello.png")}
        style={tw`w-48 h-60 mb-5 z-10 absolute top-45`}
      />
      <View
        style={borderStyle}
      >
        <Streak letter={"S"} played />
        <Streak letter={"M"} played={false}/>
        <Streak letter={"T"} played />
        <Streak letter={"W"} played={false}/>
        <Streak letter={"Th"} played={false}/>
        <Streak letter={"F"} played={false}/>
        <Streak letter={"St"} played />
      </View>
      <View
        style={borderStyle}
      >
        <Image source={require("@/assets/images/flags/German.png")} />
        <Text style={tw`${themeTextStyle} text-2xl font-bold `}>
          {language} {level}
        </Text>
      </View>
      <View style={tw`flex flex-row justify-center items-center gap-5 w-11/12`}>
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
        >
          {colorScheme === "light" ? (
            <Image source={require("@/assets/images/icons/shield-black.png")} />
          ) : (
            <Image source={require("@/assets/images/icons/shield-white.png")} />
          )}
          <Text style={tw`${themeTextStyle} text-xl font-bold `}>
            {rank} League
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
