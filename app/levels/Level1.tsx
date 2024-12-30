import React from "react";
import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Text,
  useColorScheme
} from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Back from "@/assets/components/Back";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

const Level1 = () => {
  const { themeViewStyle } = useTheme();
  const colorScheme = useColorScheme();

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
      <TouchableOpacity>
        <Icon
          name='mic'
          color={colorScheme === "light" ? "#000" : "#fff"}
          size={26}
        />
        <Text>Push to talk</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Level1;
