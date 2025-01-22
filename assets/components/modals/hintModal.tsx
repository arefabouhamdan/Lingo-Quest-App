import React from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../hooks/useTheme";
import Penguin from "@/assets/images/game/guide-tutor";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

type FriendModalProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  hint: string;
};

const AlertModal = ({ modalVisible, setModalVisible, hint }: FriendModalProps) => {
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
        <TouchableOpacity style={tw`absolute top-5 right-5`} onPress={(prev) => setModalVisible(!prev)}>
            <Icon name="close-outline" size={36} color={"white"}/>
        </TouchableOpacity>
        <View
          style={tw`${themeViewStyle} border-4 border-white rounded-5 w-85 h-50 flex flex-col absolute top-60 p-2 justify-center items-center`}
        >
          <Text style={tw`text-white text-xl font-medium text-center`}>{hint}</Text>
        </View>
        <View style={tw`absolute -right-10 bottom-40`}>
          <Penguin />
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
