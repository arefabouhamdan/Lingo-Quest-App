import React, {useState} from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Button from "@/assets/components/Button";
import Back from "@/assets/components/Back";
import tw from "twrnc";
import Input from "@/assets/components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Student = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { themeViewStyle, themeTextStyle } = useTheme();
  const handlePress = async (name: string, email: string, password: string) => {
    try {
      await AsyncStorage.setItem("user_name", name);
      await AsyncStorage.setItem("user_email", email);
      await AsyncStorage.setItem("user_password", password);
      navigation.navigate(`CreateAvatar` as never);
    } catch (error) {
      console.log("Error saving user role:", error);
    }
  };
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back />
      <View style={tw`flex flex-col items-center my-30`}>
        <Image
          source={require("@/assets/images/game/guide-no-student.png")}
          style={tw`w-48 h-68 mb-5`}
        />
        <View style={tw`flex items-center gap-5`}>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Username
            </Text>
            <Input placeholder="Enter your username" onChange={(name) => {
              setName(name);
            }}/>
          </View>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Email
            </Text>
            <Input placeholder="Enter your email" onChange={(email) => {
              setEmail(email);
            }}/>
          </View>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Password
            </Text>
            <Input placeholder="Enter your password" onChange={(password) => {
              setPassword(password);
            }}/>
          </View>
          <TouchableOpacity onPress={() => {
            handlePress(name, email, password);
          }}><Button text="Continue" type="submit"/></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Student;
