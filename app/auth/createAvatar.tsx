import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";
import Tabs from "@/assets/components/tabs";
import CustomizeAvatar from "@/assets/components/customizeAvatar";
import Button from "@/assets/components/Button";

const CreateAvatar = () => {
  const [hairColor, setHairColor] = useState("#4B3621");
  const [eyeColor, setEyeColor] = useState("#0F52BA");
  const [skinColor, setSkinColor] = useState("#F5CBA7");
  const [shirtColor, setShirtColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ADD8E6");
  const [gender, setGender] = useState("male");

  const { themeViewStyle } = useTheme();
  const buttonStyle =
    "flex justify-center items-center p-1 w-9/20 h-14 rounded-2";
  const fontStyle = "font-bold text-lg py-2 text-white";
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1`}>
      <View style={tw`flex flex-row justify-between items-center px-5 my-5`}>
        <TouchableOpacity
          style={tw`${buttonStyle} bg-sky-400 border-sky-600`}
          onPress={() => {
            setGender("male");
          }}
        >
          <Text style={tw`${fontStyle}`}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`${buttonStyle} bg-pink-500 border-pink-700`}
          onPress={() => {
            setGender("female");
          }}
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
      <Tabs
        setHairColor={setHairColor}
        setEyeColor={setEyeColor}
        setSkinColor={setSkinColor}
        setShirtColor={setShirtColor}
        setBackgroundColor={setBackgroundColor}
      />
      <View style={tw`flex flex-row justify-center items-center my-5`}>
        <Button text="Continue" press="Choose" type="submit" />
      </View>
    </SafeAreaView>
  );
};

export default CreateAvatar;
