import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Level from "@/assets/components/level";
import LanguageBar from "@/assets/components/languageBar";
import tw from "twrnc";

const Levels = () => {
  const { themeViewStyle } = useTheme();

  const levelsData = [
    { level: "1", position: { x: 20, y: -30 }, status: "active" },
    { level: "2", position: { x: 60, y: -60 }, status: "inactive" },
    { level: "3", position: { x: 20, y: -90 }, status: "inactive" },
    { level: "4", position: { x: 60, y: -120 }, status: "inactive" },
    { level: "5", position: { x: 20, y: -150 }, status: "inactive" },
    { level: "6", position: { x: 60, y: -180 }, status: "inactive" },
    { level: "7", position: { x: 20, y: -210 }, status: "inactive" },
    { level: "8", position: { x: 60, y: -240 }, status: "inactive" },
    { level: "9", position: { x: 20, y: -270 }, status: "inactive" },
    { level: "10", position: { x: 60, y: -300 }, status: "inactive" },
  ];

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <LanguageBar />
      <FlatList
        data={levelsData}
        renderItem={({ item }) => (
          <Level
            status={item.status}
            level={item.level}
            left={item.position.x}
            top={item.position.y}
          />
        )}
        inverted={true}
        style={tw`w-full flex-1`}
      />
    </SafeAreaView>
  );
};

export default Levels;