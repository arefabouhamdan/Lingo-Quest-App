import Back from "@/assets/components/Back";
import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import tw from "twrnc";
import { useTheme } from "@/assets/utils/useTheme";
import Word from "@/assets/components/word";

const Vocab = () => {
  const { themeViewStyle } = useTheme();
  const words = [
    { word: "Katze", translation: "cat" },
    { word: "Hund", translation: "dog" },
    { word: "Haus", translation: "house" },
    { word: "Baum", translation: "tree" },
    { word: "Buch", translation: "book" },
  ];

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back text="Vocab List" />

      <FlatList
        data={words}
        style={tw`w-full`}
        renderItem={({ item }) => (
          <View style={tw`items-center`}>
            <Word word={item.word} translation={item.translation} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Vocab;
