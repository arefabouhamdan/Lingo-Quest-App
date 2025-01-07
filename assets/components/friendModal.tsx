import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import Avatar from "./Avatar";
import Icon from "react-native-vector-icons/Ionicons";

type FriendModalProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

const user = {
  name: "Aref",
  id: "1234",
  joined: "01-09-2021",
  streak: "20",
  xp: "12000",
  type: "student",
  avatar: {
    gender: "male",
    background: { color: "#4FC0E8" },
    hair: { color: "#674238", style: "ManHairOne" },
    skin: { color: "#E7BC98", style: "MaleFace" },
    eyes: { color: "#1E81C8", style: "Eyes" },
    shirt: { color: "#484848", style: "ManShirt" },
  },
  friends: ["Aref", "Bilal", "Hassan", "Ali"],
};

const FriendModal = ({ modalVisible, setModalVisible }: FriendModalProps) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      style={tw`bg-black`}
    >
      <View style={tw`flex-1 justify-center items-center`}>
        <View
          style={tw`bg-white p-1 rounded-2 w-92 h-120 flex flex-col items-center`}
        >
          <Avatar user={user} />
          <TouchableOpacity
            style={tw`absolute top-5 right-5`}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon name="close-outline" color="white" size={36} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`w-52 bg-sky-400 rounded-2 h-14 mt-5 flex flex-row justify-center items-center gap-5`}
            onPress={() => console.log("Friend Added")}
          >
            <Icon name="add-outline" color="white" size={26} />
            <Text style={tw`text-white font-bold text-lg`}>Add Friend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FriendModal;
