import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import Avatar from "./Avatar";
import MiniAvatar from "./mini/miniAvatar";
import FriendModal from "./modals/friendModal";

type RankProps = {
  data: any[];
};

const Rank = ({data}: RankProps) => {
  const { themeTextStyle } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const handlePress = (index) => {
    setModalVisible((prev) => !prev);
    setIndex(index)
  }
  

  return (
    <View style={tw`mt-10`}>
      <FriendModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        name={data[index]?.name}
      />
      <View style={tw`flex flex-row items-end justify-center gap-3.5`}>
        <TouchableOpacity style={tw`flex flex-col items-center justify-center gap-1 mr-5`} onPress={()=>handlePress(1)}>
          <MiniAvatar user={data[1]} />
          <Text style={tw`${themeTextStyle} text-lg`}>{data[1]?.name}</Text>
          <View style={tw`bg-gray-300 w-11 h-26 rounded-t`}></View>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-col items-center justify-center gap-1`} onPress={()=>handlePress(0)}>
        <MiniAvatar user={data[0]} />
          <Text style={tw`${themeTextStyle} text-lg`}>{data[0]?.name}</Text>
          <View style={tw`bg-yellow-500 w-11 h-36 rounded-t`}></View>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-col items-center justify-center gap-1 ml-5`} onPress={()=>handlePress(2)}>
        <MiniAvatar user={data[2]} />
          <Text style={tw`${themeTextStyle} text-lg`}>{data[2]?.name}</Text>
          <View style={tw`bg-amber-700 w-11 h-18 rounded-t`}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Rank;
