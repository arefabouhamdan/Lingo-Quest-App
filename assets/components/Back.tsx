import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from "@react-navigation/native";

const Back = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={tw`absolute top-5 left-5 z-10`}>
        <Image source={require("../../assets/images/icons/back.png")} style={tw`invert`}/>
      </TouchableOpacity>
  )
}

export default Back