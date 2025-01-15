import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Back from "@/assets/components/Back";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import AlertModal from "@/assets/components/alertModal";
import Progress from "@/assets/components/progress";

const Level1 = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const numberOfStages = 5;
  const stage = 0;

  return (
    <SafeAreaView style={tw`${themeViewStyle}flex-1 items-center`}>
      <Back text="Level 1" background setModalVisible={setModalVisible} />
      <AlertModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={tw`w-full h-1/2 items-center justify-start`}>
        <Image
          source={require("@/assets/images/game/coffeeshop-night-1.png")}
          style={tw`w-full h-full relative`}
        />
        <Image
          source={require("@/assets/images/game/Barista.png")}
          style={tw`flex-1 w-39 h-70 absolute bottom-0`}
        />
      </View>
      <View style={tw`w-11/12 flex-row items-center justify-between mt-5`}>
        {[...Array(5)].map((_, index) => (
          index < stage ? <Progress key={index} passed /> : <Progress key={index} />
        ))}
      </View>
      <View
        style={tw`w-11/12 h-1/4 flex-row items-center justify-between mt-5 border border-gray-200 rounded `}
      >
        <TextInput
          style={tw`${themeTextStyle} flex-1 text-center px-3 pt-4 font-bold text-2xl`}
          placeholder={!isFocused && !inputValue ? "Type here" : ""}
          placeholderTextColor="#999"
          value={inputValue}
          onChangeText={setInputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <TouchableOpacity style={tw`w-48 h-14 bg-sky-400 flex items-center justify-center rounded mt-5`}>
        <Text style={tw`text-lg font-bold text-white`}>Send Message</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={tw`w-48 h-14 bg-white flex flex-row justify-center items-center gap-2.5 rounded my-auto border-r-4 border-b-4 border-sky-400 `}
      >
        <Icon name="mic-outline" color="#4EC0E8" size={36} />
        <Text style={tw`text-xl font-medium`}>Push to talk</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default Level1;
