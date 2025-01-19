import React, { useEffect } from "react";
import { Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import Button from "../../assets/components/Button";
import { useStorage } from "../../hooks/useStorage";

const Welcome = () => {
  const { themeTextStyle, themeViewStyle } = useTheme();
  const navigation = useNavigation();
  const { user } = useStorage();

  useEffect(() => {
    if (user?.type == "student") {
      navigation.navigate("MainHome" as never);
    }
    if (user?.type == "tutor") {
      navigation.navigate("TutorHome" as never);
    }
  }, [user]);

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <View style={tw`flex flex-col items-center my-auto gap-20`}>
      
        <Image
          source={require("../../assets/images/game/guide-no-hello.png")}
          style={tw`w-48 h-60 mb-5`}
        />
        <View style={tw`flex items-center gap-2`}>
          <Button text="Get Started" press="Login" type="login" image="" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
