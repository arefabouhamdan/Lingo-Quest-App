import Search from "@/assets/components/Search";
import User from "@/assets/components/User";
import React from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import Back from "@/assets/components/Back";
import { useStorage } from "@/hooks/useStorage";

const Friends = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const { user } = useStorage();

  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <Back text="Friends" />
      <View style={tw`mt-5 w-11/12`}>
        <Search text="Lost your friend? Search for him" />
      </View>
      <FlatList
        data={user?.friends}
        renderItem={({ item }) => <User name={item.name} />}
        style={tw`mt-5 w-11/12`}
      />
      {user?.friends == 0 && (
        <View style={tw`absolute top-1/2`}>
          <Text style={tw`${themeTextStyle} text-xl font-bold`}>
            You have no friends? Sad
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Friends;
