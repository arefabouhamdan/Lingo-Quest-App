import React from "react";
import { View, Text, Image, SafeAreaView, TextInput } from "react-native";
import { useTheme } from "../../assets/utils/useTheme";
import Button from "../../assets/components/Button";
import Back from "../../assets/components/Back";
import tw from "twrnc";

const Login = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back />
      <View style={tw`flex flex-col items-center my-30`}>
        <Image
          source={require("../../assets/images/game/guide.png")}
          style={tw`w-48 h-60 mb-5`}
        />
        <View style={tw`flex items-center gap-5`}>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Username
            </Text>
            <TextInput
              style={tw`text-white bg-sky-400 w-90 h-11 rounded-2 mt-2 pl-3 font-sans`}
              placeholder="Enter your username"
              placeholderTextColor="white"
            />
          </View>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Password
            </Text>
            <TextInput
              style={tw`text-white bg-sky-400 w-90 h-11 rounded-2 mt-2 pl-3`}
              placeholder="Enter your username"
              placeholderTextColor="white"
            />
          </View>
          <Button text="Login" press="Login" type="submit" />
        </View>
      </View>
      <Text style={tw`${themeTextStyle} my-auto`}>
        Forgot your <Text style={tw`text-sky-400 font-bold`}>password?</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Login;
