import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import tw from 'twrnc'

const Level = ({status =''}) => {
    const backgroundColor = status == 'active' ? 'bg-sky-400' : 'bg-gray-300'
  return (
    <TouchableOpacity>
      <View style={tw`${backgroundColor} w-20 h-20 rounded-full items-center justify-center`}>
          <Text style={tw`text-white font-bold text-3xl`}>1</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Level;
