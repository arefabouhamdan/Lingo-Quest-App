import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Level from "@/assets/components/level";
import LanguageBar from "@/assets/components/languageBar";
import tw from "twrnc";

const Levels = () => {
  const { themeViewStyle } = useTheme();

  const levelsData = [
    { level: "1", position: 20, status: "active" },
    { level: "2", position: 60, status: "inactive" },
    { level: "3", position: 20, status: "inactive" },
    { level: "4", position: 60, status: "inactive" },
    { level: "5", position: 20, status: "inactive" },
    { level: "6", position: 60, status: "inactive" },
    { level: "7", position: 20, status: "inactive" },
    { level: "8", position: 60, status: "inactive" },
    { level: "9", position: 20, status: "inactive" },
    { level: "10", position: 60, status: "inactive" },
  ];

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <LanguageBar style={'absolute top-0 z-10'}/>

      <FlatList
        data={levelsData}
        renderItem={({ item }) => (
          <Level
            status={item.status}
            level={item.level}
            left={item.position}
          />
        )}
        inverted={true}
        style={tw`flex-1 w-full`}
      />
    </SafeAreaView>
  );
};

export default Levels;
