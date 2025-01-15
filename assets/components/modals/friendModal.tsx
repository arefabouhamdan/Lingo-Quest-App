import React from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import tw from "twrnc";
import Avatar from "../Avatar";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { useQuery } from "react-query";
import { languages } from "@/assets/utils/languages";

type FriendModalProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  name: string;
};

const FriendModal = ({
  modalVisible,
  setModalVisible,
  name,
}: FriendModalProps) => {
  const { themeViewStyle, themeTextStyle } = useTheme();

  const fetchUserByName = async (name: string) => {
    const response = await axios.get(`http://192.168.1.102:3000/users/${name}`);
    return response.data;
  };

  const { data, isLoading } = useQuery(
    ["user", name],
    () => fetchUserByName(name),
    {
      enabled: modalVisible && !!name,
      retry: false,
    }
  );

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
        {isLoading && (
          <View style={tw`w-85 h-80 flex flex-col items-center justify-center`}>
            <Text style={tw`text-white text-xl font-bold`}>Loading...</Text>
          </View>
        )}
        {!isLoading && (
          <View
            style={tw`${themeViewStyle} border-4 border-white rounded-2 w-92 h-130 flex flex-col items-center justify-center`}
          >
            <Avatar user={data} />
            <View
              style={tw`flex flex-row px-3 justify-between items-center w-full mt-5`}
            >
              <Text style={tw`${themeTextStyle} text-2xl font-bold text-left `}>
                {name}
              </Text>
              <Image
                style={tw`h-4.4 w-6`}
                source={
                  languages.find((lang) => lang.name === data?.language)?.source
                }
              />
            </View>
            <View style={tw`flex flex-row justify-between items-center w-full`}>
              <View style={tw`flex flex-col px-3`}>
                <Text style={tw`${themeTextStyle} text-lg font-medium`}>
                  Joined {data?.createdAt?.split("T")[0]}
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
        )}
      </View>
    </Modal>
  );
};

export default FriendModal;
