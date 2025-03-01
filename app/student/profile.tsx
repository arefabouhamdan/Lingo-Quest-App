import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import Button from "@/assets/components/Button";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import Avatar from "@/assets/components/Avatar";
import { languages } from "@/assets/utils/languages";
import Icons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useStorage } from "@/hooks/useStorage";

const Profile = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const navigation = useNavigation();
  const { logout } = useStorage();
  const handleLogout = () => {
    logout();
    navigation.navigate("Welcome" as never);
  };

  const { user } = useStorage();

  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1`}>
      <TouchableOpacity
        style={tw`absolute z-10 top-2 right-2 bg-red-700 px-5 py-3 rounded flex items-center justify-center`}
        onPress={handleLogout}
      >
        <Icons name="log-out-sharp" size={36} color={"#fff"} />
      </TouchableOpacity>
      <Avatar user={user} />
      <View
        style={tw`flex flex-row px-3 justify-between items-center w-full mt-5`}
      >
        <Text style={tw`${themeTextStyle} text-2xl font-bold text-left `}>
          {user?.name}
        </Text>
        <Image
          style={tw`h-4.4 w-6`}
          source={
            languages.find((lang) => lang.name === user?.language)?.source
          }
        />
      </View>
      <View style={tw`flex flex-row justify-between items-center w-full`}>
        <View style={tw`flex flex-col px-3`}>
          <View
            style={tw`flex flex-row items-center mt-5 w-full justify-between`}
          >
            <Text style={tw`${themeTextStyle} text-lg font-medium`}>
              Joined {user?.createdAt.split("T")[0]}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Friends" as never)}
            >
              <Text style={tw`${themeTextStyle} text-lg font-medium `}>
                No. Friends{"  "}
                <Text style={tw`text-sky-400 font-extrabold`}>
                  {user?.friends.length}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={tw`flex items-center my-5`}>
        <Button
          text="Add Friend"
          image="add-outline"
          press="AddFriend"
          type="submit"
        />
      </View>

      <View style={tw`my-auto flex gap-5`}>
        <Text style={tw`${themeTextStyle} text-2xl font-bold text-left pl-3`}>
          Stats
        </Text>
        <View
          style={tw`flex flex-row gap-2 items-center px-2 justify-center mb-5`}
        >
          <View
            style={tw`flex items-center w-1/2.1 gap-2 border-2 border-b-4 rounded-2 border-gray-300`}
          >
            <Text style={tw`${themeTextStyle} text-xl my-2 font-medium`}>
              Days Played
            </Text>
            <Image
              source={require("@/assets/images/icons/fire.png")}
              style={tw`h-26 w-22`}
            />
            <Text style={tw`${themeTextStyle} text-xl my-2`}>
              {user?.played} days
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
            <Text style={tw`${themeTextStyle} text-xl my-2`}>{user?.xp} XP</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
