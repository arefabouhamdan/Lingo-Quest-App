import React from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { useColorScheme } from "react-native";
import Rank from "@/assets/components/rank";
import tw from "twrnc";
import LeaderList from "@/assets/components/leaderList";
import BottomBar from "@/assets/components/bottomBar";

const Leaderboard = () => {
  const colorScheme = useColorScheme();
  const { themeViewStyle, themeTextStyle } = useTheme();
  const rank = "Silver";

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-start`}
    >
      <View
        style={tw`${themeViewStyle} flex flex-row items-center p-5 justify-center gap-5 mt-10 rounded-lg w-11/12 h-22 border border-gray-200`}
      >
        {colorScheme === "light" ? (
          <Image
            source={require("@/assets/images/icons/shield-black.png")}
            style={tw``}
          />
        ) : (
          <Image
            source={require("@/assets/images/icons/shield-white.png")}
            style={tw``}
          />
        )}
        <Text style={tw`${themeTextStyle} text-2xl font-bold `}>
          {rank} League
        </Text>
      </View>
      <Rank/>
      <LeaderList/>
      <BottomBar/>
    </SafeAreaView>
  );
};

export default Leaderboard;
