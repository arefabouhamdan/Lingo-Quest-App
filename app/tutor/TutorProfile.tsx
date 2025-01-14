import React from "react";
import { Text, SafeAreaView, Image, View } from "react-native";
import Button from "@/assets/components/Button";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";

const TutorProfile = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const user = {
    name: "Aref",
    id: "1234",
    joined: "2021-09-01",
  };
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1`}>
      <View
        style={tw`flex flex-col items-center justify-end bg-sky-500 w-full h-1/3`}
      >
        <Image
          source={require("@/assets/images/character/Aref.png")}
          style={tw`h-55 w-40`}
        />
      </View>
      <Text
        style={tw`${themeTextStyle} text-2xl font-bold text-left mt-5 pl-3`}
      >
        {user.name}
      </Text>
      <View style={tw`flex flex-row justify-between items-center w-full`}>
        <View style={tw`flex flex-col pl-3`}>
          <Text style={tw`${themeTextStyle} text-lg font-medium mt-5`}>
            {user.joined}
          </Text>
          <Text style={tw`${themeTextStyle} text-lg font-medium mt-2`}>
            ID {user.id}
          </Text>
        </View>
        <View style={tw`flex flex-col pr-3 justify-start`}>
          <Text style={tw`${themeTextStyle} text-lg font-medium mt-5`}>
            Language{" "}
            <Image
              style={tw`h-4 w-6`}
              source={require("@/assets/images/flags/German.png")}
            />
          </Text>
        </View>
      </View>
      <View style={tw`flex items-center my-5`}>
        <Button text="Request Payment" image="cash-outline" press="" type="submit" />
      </View>
    </SafeAreaView>
  );
};

export default TutorProfile;
