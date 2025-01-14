import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Level from "@/assets/components/level";
import LanguageBar from "@/assets/components/languageBar";
import tw from "twrnc";
import BottomBar from "@/assets/components/bottomBar";

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

  const user = {
    name: "Aref",
    id: "1234",
    joined: "01-09-2021",
    streak: "20",
    xp: "12000",
    type: "student",
    language: "Arabic",
    rank: "Diamond",
    avatar: {
      gender: "female",
      background: { color: "#4FC0E8" },
      hair: { color: "#674238", style: "WomanHairTwo" },
      skin: { color: "#E7BC98", style: "WomanFace" },
      eyes: { color: "#1E81C8", style: "Eyes" },
      shirt: { color: "#484848", style: "WomanShirt" },
    },
    friends: ["Aref", "Bilal", "Hassan", "Ali"],
  };

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <LanguageBar user={user}/>

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
      <BottomBar/>
    </SafeAreaView>
  );
};

export default Levels;
