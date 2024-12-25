import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Button from "@/assets/components/Button";
import Back from "@/assets/components/Back";
import tw from "twrnc";
import Input from "@/assets/components/Input";

const Student = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back />
      <View style={tw`flex flex-col items-center my-30`}>
        <Image
          source={require("@/assets/images/game/guide-no-student.png")}
          style={tw`w-48 h-68 mb-5`}
        />
        <View style={tw`flex items-center gap-5`}>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Username
            </Text>
            <Input placeholder="Enter your username" />
          </View>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Email
            </Text>
            <Input placeholder="Enter your email" />
          </View>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Password
            </Text>
            <Input placeholder="Enter your password" />
          </View>
          <Button text="Continue" press="Avatar" type="submit" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Student;
