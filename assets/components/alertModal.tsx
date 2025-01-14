import React from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../utils/useTheme";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Ionicons";

type FriendModalProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};


const AlertModal = ({ modalVisible, setModalVisible }: FriendModalProps) => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const navigation = useNavigation();
  const handleLeave = () => {
    setModalVisible(!modalVisible)
    navigation.goBack()
  }
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
          style={tw`${themeViewStyle} border-4 border-white rounded-2 w-92 h-130 flex flex-col items-center`}
        >
         
          <TouchableOpacity
            style={tw`absolute top-5 right-5`}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon name="close-outline" color="white" size={36} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`w-52 bg-sky-400 rounded-2 h-14 my-auto flex flex-row justify-center items-center gap-5`}
            onPress={handleLeave}
          >
            <Text style={tw`text-white font-bold text-lg`}>Leave</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
