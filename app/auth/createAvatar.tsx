import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import Tabs from "@/assets/components/tabs";
import CustomizeAvatar from "@/assets/components/customizeAvatar";
import Button from "@/assets/components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Back from "@/assets/components/Back";

const CreateAvatar = () => {
  const navigation = useNavigation();
  const [hairColor, setHairColor] = useState("#4B3621");
  const [eyeColor, setEyeColor] = useState("#0F52BA");
  const [skinColor, setSkinColor] = useState("#F5CBA7");
  const [shirtColor, setShirtColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ADD8E6");
  const [gender, setGender] = useState("male");

  const handlePress = async (
    backgroundColor: string,
    hairColor: string,
    skinColor: string,
    eyeColor: string,
    shirtColor: string,
    gender: string
  ) => {
    try {
      const avatar = {
        background: {
          color: backgroundColor,
        },
        hair: {
          color: hairColor,
        },
        skin: {
          color: skinColor,
        },
        eyes: {
          color: eyeColor,
        },
        shirt: {
          color: shirtColor,
        },
        gender: gender,
      };
      await AsyncStorage.setItem("user_avatar", JSON.stringify(avatar));
      navigation.navigate(`ChooseLanguage` as never);
    } catch (error) {
      console.log("Error saving user role:", error);
    }
  };

  const { themeViewStyle } = useTheme();
  const buttonStyle =
    "flex justify-center items-center p-1 w-9/20 h-14 rounded-2";
  const fontStyle = "font-bold text-lg py-2 text-white";
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1`}>
      <Back text="Create Avatar" background/>
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
      <TouchableOpacity
        style={tw`flex flex-row justify-center items-center my-5`}
        onPress={() => {
          handlePress(
            backgroundColor,
            hairColor,
            skinColor,
            eyeColor,
            shirtColor,
            gender
          );
        }}
      >
        <Button text="Continue" type="submit" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateAvatar;
