import React from "react";
import { Text, SafeAreaView, Image, View } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";

const Profile = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const user = {
    name: "Aref",
    id: "1234",
    joined: "2021-09-01",
  };
  const friends = ["Aref", "Bilal", "Hassan", "Ali"];
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1`}
    >
      <View>
        <Image source={require('@/assets/images/character/Aref.png')}/>
      </View>
      <Text>{user.name}</Text>
      <View>
        <View>
          <Text>{user.joined}</Text>
          <Text>ID {user.id}</Text>
        </View>
        <View>
          <Text>Language <Image source={require('@/assets/images/flags/German.png')}/></Text>
          <Text>Friends {friends.length}</Text>
        </View>
      </View>


    </SafeAreaView>
  );
};

export default Profile;
