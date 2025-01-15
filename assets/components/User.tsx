import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Icon from "react-native-vector-icons/Ionicons";
import { useColorScheme } from "react-native";
import { useNavigation } from "expo-router";
import tw from "twrnc";
import FriendModal from "../components/modals/friendModal";
import { useStorage } from "@/hooks/useStorage";
import MiniAvatar from "./mini/miniAvatar";

type UserProps = {
  name: string;
  info?: string;
  avatar?: string;
  navigateTo?: string;
  tutor?: boolean;
  user: any;
};

const User = ({ name, info, user, navigateTo, tutor }: UserProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { themeTextStyle } = useTheme();

  return (
    <>
      <FriendModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        name={name}
      />
      <TouchableOpacity
        style={tw`flex flex-row items-center gap-5 p-4 rounded border border-gray-200 mb-4 h-20 justify-between`}
        onPress={() => {
          if (tutor && navigateTo) {
            navigation.navigate(navigateTo, { userName: name });
          } else {
            setModalVisible((prev) => !prev);
          }
        }}
      >
        <View style={tw`flex flex-row items-center gap-5`}>
          <MiniAvatar user={user} />
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-extrabold`}>
              {name}
            </Text>
            {info && (
              <Text
                style={tw`${themeTextStyle} text-lg font-medium text-sky-400`}
              >
                {info}
              </Text>
            )}
          </View>
        </View>
        <Icon
          name="chevron-forward-outline"
          color={colorScheme === "light" ? "#000" : "#fff"}
          size={26}
        />
      </TouchableOpacity>
    </>
  );
};

export default User;
