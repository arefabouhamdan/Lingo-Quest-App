import React from "react";
import { Text, SafeAreaView } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";

const Profile = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
