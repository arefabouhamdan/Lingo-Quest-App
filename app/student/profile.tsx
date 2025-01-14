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
import BottomBar from "@/assets/components/bottomBar";
import { useNavigation } from "@react-navigation/native";
import { useStorage } from "@/hooks/useStorage";

const Profile = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const navigation = useNavigation();
  const { logout } = useStorage();
  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  }

  const user = {
    name: "Aref",
    id: "1234",
    joined: "01-09-2021",
    streak: "20",
    xp: "12000",
    type: "student",
    language: "Arabic",
    avatar: {
      gender: "female",
      background: { color: "#4FC0E8" },
      hair: { color: "#674238", style: "WomanHairTwo" },
      skin: { color: "#E7BC98", style: "WomanFace" },
      eyes: { color: "#1E81C8", style: "Eyes" },
      shirt: { color: "#484848", style: "WomanShirt" },
    },
    friends: ["Aref", "Bilal", "Hassan", "Ali"],
  };

  const { name, id, joined, streak, xp, friends } = user;

  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1`}>
      <TouchableOpacity
        style={tw`absolute z-10 top-2 right-2 bg-red-700 px-5 py-3 rounded flex items-center justify-center`}
        onPress={handleLogout}
      >
        <Icons name="log-out-sharp" size={36} color={"#fff"}/>
      </TouchableOpacity>
      <Avatar user={user} />
      <View
        style={tw`flex flex-row px-3 justify-between items-center w-full mt-5`}
      >
        <Text style={tw`${themeTextStyle} text-2xl font-bold text-left `}>
          {name}
        </Text>
        <Image
          style={tw`h-4.4 w-6`}
          source={languages.find((lang) => lang.name === user.language)?.source}
        />
      </View>
      <View style={tw`flex flex-row justify-between items-center w-full`}>
        <View style={tw`flex flex-col px-3`}>
          <View
            style={tw`flex flex-row items-center mt-5 w-full justify-between`}
          >
            <Text style={tw`${themeTextStyle} text-lg font-medium mt-2`}>
              ID {id}
            </Text>
            <Text style={tw`${themeTextStyle} text-lg font-medium `}>
              No. Friends{"  "}
              <Text style={tw`text-sky-400 font-extrabold`}>
                {friends.length}
              </Text>
            </Text>
          </View>
          <Text style={tw`${themeTextStyle} text-lg font-medium`}>
            Joined {joined}
          </Text>
        </View>
      </View>
      <View style={tw`flex items-center my-5`}>
        <Button
          text="Add Friend"
          image="add-outline"
          press="Friends"
          type="submit"
        />
      </View>

      <Text style={tw`${themeTextStyle} text-xl font-bold mb-2 text-left pl-3`}>
        Stats
      </Text>
      <View style={tw`flex flex-row gap-2 items-center px-2 justify-center mb-5`}>
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
          <Text style={tw`${themeTextStyle} text-xl my-2`}>{streak} days</Text>
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
          <Text style={tw`${themeTextStyle} text-xl my-2`}>{xp} XP</Text>
        </View>
      </View>
      <BottomBar/>
    </SafeAreaView>
  );
};

export default Profile;
