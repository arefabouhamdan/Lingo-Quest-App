import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

const BottomBar = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { themeTextStyle } = useTheme();

  return (
    <View style={tw`w-full h-15 bg-sky-400`}>
      <View style={tw`flex flex-row w-full h-full`}>
          <TouchableOpacity
            style={tw`flex-1 flex items-center justify-center`}
            onPress={() => navigation.navigate("Home" as never)}
          >
            <Icon name="home" size={30} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-1 flex items-center justify-center`}
            onPress={() => navigation.navigate("Levels" as never)}
          >
            <Icon name="bonfire" size={30} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-1 flex items-center justify-center`}
            onPress={() => navigation.navigate("Leaderboard" as never)}
          >
            <Icon name="trophy" size={30} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-1 flex items-center justify-center`}
            onPress={() => navigation.navigate("Profile" as never)}
          >
            <Icon name="person" size={30} color={"#fff"} />
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;
