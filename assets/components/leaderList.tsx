import React from "react";
import { FlatList, Text, View } from "react-native";
import tw from "twrnc";

const LeaderList = () => {
  const data = [
    { username: "Aref", key: "1" },
    { username: "Oday", key: "2" },
    { username: "Rony", key: "3" },
    { username: "Majd", key: "4" },
    { username: "Aya", key: "5" },
    { username: "Sara", key: "6" },
    { username: "Lina", key: "7" },
    { username: "Samer", key: "8" },
    { username: "Layan", key: "9" },
    { username: "Lara", key: "10" },
    { username: "Layan", key: "11" },
    { username: "Lara", key: "12" },
    { username: "Layan", key: "13" },
    { username: "Lara", key: "14" },
    { username: "Layan", key: "15" },
    { username: "Lara", key: "16" },
    { username: "Layan", key: "17" },
    { username: "Lara", key: "18" },
    { username: "Jihad", key: "19" },
  ];
  return (
    <View style={tw`w-11/12 flex-1 border border-gray-200 rounded-lg `}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text style={tw`text-xl`}>{item.username}</Text>}
          style={tw`p-5 `}
        />
    </View>
  );
};

export default LeaderList;
