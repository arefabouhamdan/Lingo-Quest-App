import React from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";
import Avatar from "@/assets/components/Avatar";
import Tabs from "@/assets/components/tabs";

const CreateAvatar = () => {
  const { themeViewStyle } = useTheme();
  const buttonStyle =
    "flex justify-center items-center p-1 w-9/20 h-14 rounded-2 border-r-4 border-b-4";
  const fontStyle = "font-bold text-lg py-2 text-white";
  const user = {
    type: "student",
    avatar: {
      gender: "male",
      background: { color: "#4FC0E8" },
      hair: { color: "#674238", style: "ManHairOne" },
      skin: { color: "#E7BC98", style: "MaleFace" },
      eyes: { color: "#1E81C8", style: "Eyes" },
      shirt: { color: "#484848", style: "ManShirt" },
    },
  };
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1`}>
      <View style={tw`flex flex-row justify-between items-center px-5 my-5`}>
        <TouchableOpacity style={tw`${buttonStyle} bg-sky-400 border-sky-600`}>
          <Text style={tw`${fontStyle}`}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`${buttonStyle} bg-pink-500 border-pink-700`}
        >
          <Text style={tw`${fontStyle}`}>Female</Text>
        </TouchableOpacity>
      </View>
      <Avatar user={user} />
      <View style={tw`px-5 my-5`}>
        <Tabs />
      </View>
    </SafeAreaView>
  );
};

export default CreateAvatar;
