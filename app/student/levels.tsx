import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Level from "@/assets/components/level";
import LanguageBar from "@/assets/components/languageBar";
import tw from "twrnc";

const Levels = () => {
  const { themeViewStyle } = useTheme();

  const levelsData = [
    { level: "1", position: 20, status: "active", type: "level" },
    { level: "2", position: 60, status: "active", type: "level" },
    { level: "3", position: 20, status: "inactive", type: "level" },
    { level: "4", position: 60, status: "inactive", type: "level" },
    { level: "5", position: 20, status: "inactive", type: "level" },
    { level: "Test A1", position: 20, status: "inactive", type: "test" },
    { level: "6", position: 60, status: "inactive", type: "level" },
    { level: "7", position: 20, status: "inactive", type: "level" },
    { level: "8", position: 60, status: "inactive", type: "level" },
    { level: "9", position: 20, status: "inactive", type: "level" },
    { level: "10", position: 60, status: "inactive", type: "level" },
    { level: "11", position: 60, status: "hidden" },
  ];

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <LanguageBar style={"absolute top-0 z-10"} />

      <FlatList
        data={levelsData}
        renderItem={({ item }) => (
          <Level
            status={item.status}
            level={item.level}
            left={item.position}
            type={item.type}
          />
        )}
        inverted={true}
        style={tw`flex-1 w-full`}
      />
    </SafeAreaView>
  );
};

export default Levels;
