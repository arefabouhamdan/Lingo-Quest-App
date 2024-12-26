import Back from "@/assets/components/Back";
import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import tw from "twrnc";
import { useTheme } from "@/assets/utils/useTheme";
import Word from "@/assets/components/word";

const vocab = () => {
  const { themeViewStyle } = useTheme();
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back text="Vocab List" />

      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        style={tw`w-full mt-5`}
        renderItem={({ item }) => <View style={tw`items-center`}><Word word={item.key} /></View>}
      />
    </SafeAreaView>
  );
};

export default vocab;
