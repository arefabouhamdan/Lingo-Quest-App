import React from "react";
import { FlatList, View, Text } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import User from "./User";
import tw from "twrnc";

type LeaderListProps = {
  data: any[];
}

const LeaderList= ({ data } : LeaderListProps) => {

  return (
    <View style={tw`w-11/12 flex-1 border border-gray-200 rounded-lg mb-4`}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <User name={item.name} user={item}/>
          )}
          style={tw`p-2`}
        />
    </View>
  );
};

export default LeaderList;
