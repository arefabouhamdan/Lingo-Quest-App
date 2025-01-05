import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Level from "@/assets/components/level";
import LanguageBar from "@/assets/components/languageBar";
import tw from "twrnc";

const Levels = () => {
  const { themeViewStyle } = useTheme();

  const levelsData = [
    { level: "1", status: "active", type: "level" },
    { level: "2", status: "active", type: "level" },
    { level: "3", status: "inactive", type: "level" },
    { level: "4", status: "inactive", type: "level" },
    { level: "5", status: "inactive", type: "level" },
    { level: "Test A1", status: "inactive", type: "test" },
    { level: "6", status: "inactive", type: "level" },
    { level: "7", status: "inactive", type: "level" },
    { level: "8", status: "inactive", type: "level" },
    { level: "9", status: "inactive", type: "level" },
    { level: "10", status: "inactive", type: "level" },
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
