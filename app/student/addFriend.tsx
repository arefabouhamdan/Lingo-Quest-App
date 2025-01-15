import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import Back from "@/assets/components/Back";
import Search from "@/assets/components/Search";
import { useQuery } from "react-query";
import axios from "axios";
import User from "@/assets/components/User";
import { useStorage } from "@/hooks/useStorage";
import tw from "twrnc";

const AddFriend = () => {
  const [search, setSearch] = useState("");
  const { themeViewStyle, themeTextStyle } = useTheme();
  const { user } = useStorage();

  const fetchUsers = async () => {
    const response = await axios.get(`http://192.168.1.102:3000/users`);
    return response.data;
  };

  const {
    data,
    isLoading,
    refetch,
  } = useQuery(["user", search], () => fetchUsers(), {
    enabled: false,
  });

  useEffect(() => {
    if (search.trim()) {
      refetch();
    }
  }, [search, refetch]);

  const users = data?.filter((input) => input.name.includes(search)).filter((input) => input.name !== user.name);

  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <Back text="Add Friend" />
      <View style={tw`mt-5 w-11/12`}>
        <Search text="Enter name" setSearch={setSearch} />
      </View>
      {isLoading && (
        <Text style={tw`${themeTextStyle} mt-5 text-xl font-bold`}>
          Searching...
        </Text>
      )}
      <FlatList
        data={users || []}
        renderItem={({ item }) => <User name={item.name || item} />}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        style={tw`mt-5 w-11/12`}
      />
      {!users && (
        <View style={tw`absolute top-1/2`}>
          <Text style={tw`${themeTextStyle} text-xl font-bold`}>
            Searching for a friend? Me too
          </Text>
        </View>
      )}
      {!users?.length && !isLoading && search.trim() && (
        <View style={tw`absolute top-1/2`}>
          <Text style={tw`${themeTextStyle} text-xl font-bold`}>
            No users found.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AddFriend;
