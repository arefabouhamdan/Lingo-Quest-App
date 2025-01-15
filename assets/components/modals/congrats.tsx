import React from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../hooks/useTheme";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Ionicons";

type FriendModalProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  level: number;
};

const Congrats = ({ modalVisible, setModalVisible, level }: FriendModalProps) => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const navigation = useNavigation();
  const handleLeave = () => {
    setModalVisible(!modalVisible);
    navigation.goBack();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      style={tw`bg-black`}
    >
      <View
        style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
      >
        <View
          style={tw`${themeViewStyle} border-4 border-white rounded-2 w-85 h-80 flex flex-col items-center justify-center`}
        >
          <View style={tw`flex flex-col items-center justify-center gap-10`}>
            <Text style={tw`${themeTextStyle} text-xl font-bold `}>
              Congrats you completed Level {level}!
            </Text>
            <TouchableOpacity
              style={tw`w-52 bg-sky-400 rounded-2 h-14 my-auto flex flex-row justify-center items-center gap-5`}
              onPress={handleLeave}
            >
              <Text style={tw`text-white font-bold text-lg`}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Congrats;
