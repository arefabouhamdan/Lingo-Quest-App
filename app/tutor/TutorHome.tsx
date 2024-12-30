import LanguageBar from "@/assets/components/languageBar";
import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";
import User from "@/assets/components/User";

const TutorHome = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const data = [
    { name: "Aref", level: "A1" },
    { name: "Bilal", level: "B1" },
    { name: "Hassan", level: "C1" },
    { name: "Ali", level: "A2" },
  ];

  const borderStyle = `${themeViewStyle} flex items-center p-5 justify-center gap-5 mt-10 rounded-lg w-11/12 h-30 border border-gray-200`;
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <LanguageBar />
      <View style={tw`${borderStyle}`}>
        <Text style={tw`${themeTextStyle} text-xl font-bold`}>
          Number of Tests
        </Text>
        <Text style={tw`${themeTextStyle} text-3xl font-bold`}>{data.length}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <User name={item.name} avatar={item.name} info={`Level ${item.level}`} />
        )}
        style={tw`mt-10 w-11/12`}
      />
    </SafeAreaView>
  );
};

export default TutorHome;
