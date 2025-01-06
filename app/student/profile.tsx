import React from "react";
import { Text, SafeAreaView, Image, View } from "react-native";
import Button from "@/assets/components/Button";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";
import Avatar from "@/assets/components/Avatar";

const Profile = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const user = {
    name: "Aref",
    id: "1234",
    joined: "01-09-2021",
    streak: "20",
    xp: "12000",
  };
  const friends = ["Aref", "Bilal", "Hassan", "Ali"];
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1`}>
      <View
        style={tw`flex flex-col items-center justify-end bg-sky-500 w-full h-1/3`}
      >
        <Avatar />
      </View>
      <View style={tw`flex flex-row px-3 justify-between items-center w-full mt-5`}>
        <Text style={tw`${themeTextStyle} text-2xl font-bold text-left `}>
          {user.name}
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
              ID {user.id}
            </Text>
            <Text style={tw`${themeTextStyle} text-lg font-medium `}>
              No. Friends{"  "}
              <Text style={tw`text-sky-400 font-extrabold`}>
                {friends.length}
              </Text>
            </Text>
          </View>
          <Text style={tw`${themeTextStyle} text-lg font-medium`}>
            Joined {user.joined}
          </Text>
        </View>
      </View>
      <View style={tw`flex items-center my-5`}>
        <Button text="Add Friend" image="add-outline" press="" type="submit" />
      </View>

      <Text style={tw`${themeTextStyle} text-xl font-bold mb-2 text-left pl-3`}>
        Stats
      </Text>
      <View style={tw`flex flex-row gap-2 items-center px-2 justify-center`}>
        <View
          style={tw`flex items-center w-1/2.1 gap-2 border-2 border-b-4 rounded-2 border-gray-300`}
        >
          <Text style={tw`${themeTextStyle} text-xl my-2 font-medium`}>
            Day Streak
          </Text>
          <Image
            source={require("@/assets/images/icons/fire.png")}
            style={tw`h-26 w-22`}
          />
          <Text style={tw`${themeTextStyle} text-xl my-2`}>
            {user.streak} days
          </Text>
        </View>
        <View
          style={tw`flex items-center w-1/2.1 gap-2 border-2 border-b-4 rounded-2 border-gray-300`}
        >
          <Text style={tw`${themeTextStyle} text-xl my-2 font-medium`}>
            Total XP
          </Text>
          <Image
            source={require("@/assets/images/icons/bolt.png")}
            style={tw`h-26 w-19`}
          />
          <Text style={tw`${themeTextStyle} text-xl my-2`}>{user.xp} XP</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
