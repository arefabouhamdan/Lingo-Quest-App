import React, { useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import { useQuery } from "react-query";
import { useTheme } from "@/hooks/useTheme";
import axios from "axios";
import User from "./User";
import tw from "twrnc";

const LeaderList = () => {
  const fetchUsers = async () => {
    const response = await axios.get(`http://192.168.1.102:3000/users`);
    return response.data;
  };

  const { data, isLoading, refetch } = useQuery(
    ["userLeaderboard"],
    () => fetchUsers(),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    refetch();
  }, []);

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
          <Text style={tw`${themeTextStyle} text-lg font-bold`}>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default LeaderList;
