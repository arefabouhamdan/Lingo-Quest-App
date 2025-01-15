import React from "react";
import { FlatList, View, Text } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import User from "./User";
import tw from "twrnc";

type LeaderListProps = {
  data: any[];
  isLoading: boolean;
}

const LeaderList= ({ data, isLoading } : LeaderListProps) => {
  const { themeTextStyle } = useTheme();
  return (
    <View style={tw`w-11/12 flex-1 border border-gray-200 rounded-lg `}>
      {!isLoading ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <User name={item.name} avatar={item.name} info={item.info} />
          )}
          style={tw`p-2`}
        />
      ) : (
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`${themeTextStyle} text-lg font-bold`}>
            Loading...
          </Text>
        </View>
      )}
    </View>
  );
};

export default LeaderList;
