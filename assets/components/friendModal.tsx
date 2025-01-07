import React from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
import { useTheme } from "../utils/useTheme";
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
  const { themeViewStyle, themeTextStyle } = useTheme();
  const { name, id, joined, friends } = user;

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
          <Avatar user={user} />
          <View
            style={tw`flex flex-row px-3 justify-between items-center w-full mt-5`}
          >
            <Text style={tw`${themeTextStyle} text-2xl font-bold text-left `}>
              {name}
            </Text>
            <Image
              style={tw`h-4.4 w-6`}
              source={require("@/assets/images/flags/German.png")}
            />
          </View>
          <View style={tw`flex flex-row justify-between items-center w-full`}>
            <View style={tw`flex flex-col px-3`}>
              <View
                style={tw`flex flex-row items-center mt-5 w-full justify-between`}
              >
                <Text style={tw`${themeTextStyle} text-lg font-medium mt-2`}>
                  ID {id}
                </Text>
                <Text style={tw`${themeTextStyle} text-lg font-medium `}>
                  No. Friends{"  "}
                  <Text style={tw`text-sky-400 font-extrabold`}>
                    {friends.length}
                  </Text>
                </Text>
              </View>
              <Text style={tw`${themeTextStyle} text-lg font-medium`}>
                Joined {joined}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={tw`absolute top-5 right-5`}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon name="close-outline" color="white" size={36} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`w-52 bg-sky-400 rounded-2 h-14 my-auto flex flex-row justify-center items-center gap-5`}
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
