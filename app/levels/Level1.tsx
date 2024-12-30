import React from "react";
import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Back from "@/assets/components/Back";
import tw from "twrnc";

const Level1 = () => {
  const { themeViewStyle } = useTheme();

  return (
    <SafeAreaView style={tw`${themeViewStyle}flex-1 items-center`}>
      <Back text="Level 1" />
      <View style={tw`w-full h-3/4 items-center justify-start`}>
        <Image
          source={require("@/assets/images/game/coffeeshop-night-1.png")}
          style={tw`w-full h-full relative`}
        />
        <Image
          source={require("@/assets/images/game/Barista.png")}
          style={tw`flex-1 w-55 h-100 absolute bottom-0`}
        />
      </View>
    </SafeAreaView>
  );
};

export default Level1;
