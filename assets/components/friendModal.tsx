import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

type FriendModalProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

const FriendModal = ({ modalVisible, setModalVisible }: FriendModalProps) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      style={tw`bg-black`}
    >
      <View>
        <View>
          <Text>Hello World!</Text>
          <Text>Hide Modal</Text>
          <TouchableOpacity
            style={tw`bg-blue-500 p-4 rounded`}
            onPress={() => setModalVisible(!modalVisible)}
          ><Text>Hide</Text></TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FriendModal;
