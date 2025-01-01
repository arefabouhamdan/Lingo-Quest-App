import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import tw from "twrnc";

type TestProps = {
  route: {
    params: {
      userName: string;
    };
  };
};

const Test = ({ route } : TestProps) => {
  const { userName } = route.params;

  return (
    <SafeAreaView>
      <View>
        <Text>{userName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Test;
