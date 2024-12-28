import React from "react";
import { FlatList, View } from "react-native";
import User from "./User";
import tw from "twrnc";

const LeaderList = () => {
  const data = [
    { name: "Aref", info: "12000", key: "1" },
    { name: "Ali", info: "10000", key: "2" },
    { name: "Mehdi", info: "9000", key: "3" },
    { name: "Amir", info: "8000", key: "4" },
    { name: "Reza", info: "7000", key: "5" },
    { name: "Hossein", info: "6000", key: "6" },
    { name: "Mohammad", info: "5000", key: "7" },
    { name: "Sina", info: "4000", key: "8" },
    { name: "Parsa", info: "3000", key: "9" },
    { name: "Mina", info: "2000", key: "10" },
  ];

  return (
    <View style={tw`w-11/12 flex-1 border border-gray-200 rounded-lg `}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <User name={item.name} avatar={item.name} info={item.info} />
        )}
        style={tw`p-3`}
      />
    </View>
  );
};

export default LeaderList;
