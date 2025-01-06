import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

const CreateAvatar = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View>
        <TouchableOpacity>
          <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Female</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAvatar;
