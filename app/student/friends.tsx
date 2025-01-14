import Search from "@/assets/components/Search";
import User from "@/assets/components/User";
import React from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import Back from "@/assets/components/Back";

const Friends = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const user = {
    name: "Aref",
    id: "1234",
    joined: "01-09-2021",
    streak: "20",
    xp: "12000",
    type: "student",
    avatar: {
      gender: "male",
      background: { color: "#4FC0E8" },
      hair: { color: "#674238", style: "ManHairOne" },
      skin: { color: "#E7BC98", style: "MaleFace" },
      eyes: { color: "#1E81C8", style: "Eyes" },
      shirt: { color: "#484848", style: "ManShirt" },
    },
    friends: [
      { name: "Aref", dateAdded: "01-09-2021" },
      { name: "Bilal", dateAdded: "01-09-2021" },
      { name: "Hassan", dateAdded: "01-09-2021" },
      { name: "Ali", dateAdded: "01-09-2021" },
    ],
  };
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <Back text="Friends" />
      <View style={tw`mt-5 w-11/12`}>
        <Search text="Lost your friend? Search for him" />
      </View>
      <FlatList
        data={user.friends}
        renderItem={({ item }) => (
          <User name={item.name} />
        )}
        ListEmptyComponent={() => (
          <View style={tw`flex-1 items-center justify-center`}>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              You have no friends? Sad
            </Text>
          </View>
        )}
        style={tw`mt-5 w-11/12`}
      />
    </SafeAreaView>
  );
};

export default Friends;
