import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Level from "@/assets/components/level";
import LanguageBar from "@/assets/components/languageBar";
import tw from "twrnc";
import { useStorage } from "@/hooks/useStorage";
import { levelsData } from "@/assets/utils/levels";

const Levels = () => {
  const { themeViewStyle } = useTheme();
  const { user } = useStorage();

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <LanguageBar/>

      <FlatList
        data={levelsData}
        renderItem={({ item, index }) => (
          <Level
            status={user?.level >= index + 1 ? "active" : "inactive"}
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
