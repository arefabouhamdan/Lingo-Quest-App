import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";

const CreateAvatar = () => {
  const { themeViewStyle } = useTheme();
  const buttonStyle = 'flex justify-center items-center p-1 w-9/20 h-14 rounded-2 border-r-4 border-b-4';
  const fontStyle = 'text-white font-bold text-lg';
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1`}>
      <View style={tw`flex flex-row justify-between items-center px-5 mt-5`}>
        <TouchableOpacity style={tw`${buttonStyle} bg-sky-400 border-sky-600`}>
          <Text
            style={tw`${fontStyle}`}
          >
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`${buttonStyle} bg-pink-500 border-pink-700`}>
          <Text
            style={tw`${fontStyle}`}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAvatar;
