import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import Level from "@/assets/components/level";
import tw from "twrnc";

const Levels = () => {
  const { themeViewStyle } = useTheme();
  const levelsData = [
    { level: "1", status: "active" },
    { level: "2", status: "active" },
    { level: "3", status: "active" },
    { level: "4", status: "inactive" },
    { level: "5", status: "inactive" },
    { level: "6", status: "inactive" },
    { level: "7", status: "inactive" },
    { level: "8", status: "inactive" },
    { level: "9", status: "inactive" },
    { level: "10", status: "inactive" },
    { level: "11", status: "inactive" },
    { level: "12", status: "inactive" },
    { level: "13", status: "inactive" },
    { level: "14", status: "inactive" },
    { level: "15", status: "inactive" },
    { level: "16", status: "inactive" },
    { level: "17", status: "inactive" },
    { level: "18", status: "inactive" },
    { level: "19", status: "inactive" },
    { level: "20", status: "inactive" },
  ];

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <FlatList
        data={levelsData}
        renderItem={({ item }) => (
          <Level
            status={item.status}
            level={item.level}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Levels;
