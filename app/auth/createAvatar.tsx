import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";
import Tabs from "@/assets/components/tabs";
import CustomizeAvatar from "@/assets/components/customizeAvatar";

const CreateAvatar = () => {
  const [hairColor, setHairColor] = useState("blue");
  const [eyeColor, setEyeColor] = useState("red");
  const [skinColor, setSkinColor] = useState("pink");
  const [shirtColor, setShirtColor] = useState("green");
  const [backgroundColor, setBackgroundColor] = useState("gray");
  const [gender, setGender] = useState("male");
  
  const { themeViewStyle } = useTheme();
  const buttonStyle =
    "flex justify-center items-center p-1 w-9/20 h-14 rounded-2 border-r-4 border-b-4";
  const fontStyle = "font-bold text-lg py-2 text-white";
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
      <CustomizeAvatar
        hairColor={hairColor}
        eyeColor={eyeColor}
        skinColor={skinColor}
        backgroundColor={backgroundColor}
        shirtColor={shirtColor}
        gender={gender}
      />
      <View style={tw`px-5 my-5`}>
        <Tabs setHairColor={setHairColor}/>
      </View>
    </SafeAreaView>
  );
};

export default CreateAvatar;
