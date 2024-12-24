import React from "react";
import { View, Text, Image, SafeAreaView, TextInput } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Button from "@/assets/components/Button";
import Back from "@/assets/components/Back";
import tw from "twrnc";
import Input from "@/assets/components/Input";

const Home = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const name = "Aref";
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Text style={tw`text-white text-2xl font-bold absolute top-15 z-11`}>
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
        style={tw`flex flex-col items-start p-5 justify-center gap-5 mt-95 bg-white rounded-lg w-11/12 h-22 border border-gray-200`}
      ></View>
      <View
        style={tw`flex flex-col items-start p-5 justify-center gap-5 mt-10 bg-white rounded-lg w-11/12 h-22 border border-gray-200`}
      ></View>
      <View style={tw`flex flex-row justify-center items-center gap-9 w-11/12`}>
        <View
          style={tw`flex flex-col items-start p-5 justify-center mt-10 bg-white rounded-lg w-9/20 h-22 border border-gray-200`}
        ></View>
        <View
          style={tw`flex flex-col items-start p-5 justify-center mt-10 bg-white rounded-lg w-9/20 h-22 border border-gray-200`}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
