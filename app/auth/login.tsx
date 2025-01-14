import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Button from "@/assets/components/Button";
import Back from "@/assets/components/Back";
import tw from "twrnc";
import Input from "@/assets/components/Input";
import { useLogin } from "@/hooks/useLogin";

const Login = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();
  const errorInput = tw`border-red-500`;

  const handleLogin = () => {
    loginMutation.mutate({ name, password });
  };

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back />
      <View style={tw`flex flex-col items-center my-30`}>
        <Image
          source={require("@/assets/images/game/guide.png")}
          style={tw`w-48 h-60 mb-5`}
        />
        <View style={tw`flex items-center gap-5`}>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Username
            </Text>
            <Input
              placeholder="Enter your username"
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Password
            </Text>
            <Input
              placeholder="Enter your password"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity onPress={handleLogin}>
            <Button
              text={loginMutation.isLoading ? "Logging in..." : "Login"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Login;
