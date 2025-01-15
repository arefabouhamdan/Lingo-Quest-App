import React, {useState} from "react";
import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Back from "@/assets/components/Back";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import AlertModal from "@/assets/components/alertModal";

const Level1 = () => {
  const { themeViewStyle } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={tw`${themeViewStyle}flex-1 items-center`}>
      <Back text="Level 1" background setModalVisible={setModalVisible}/>
      <AlertModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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
      <TouchableOpacity
        style={tw`w-48 h-14 bg-white flex flex-row justify-center items-center gap-2.5 rounded my-auto border-r-4 border-b-4 border-sky-400 `}
      >
        <Icon name="mic-outline" color="#4EC0E8" size={36} />
        <Text style={tw`text-xl font-medium`}>Push to talk</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Level1;
