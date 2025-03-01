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
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const { themeViewStyle, themeTextStyle } = useTheme();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();

  const handleLogin = () => {
    loginMutation.mutate({ name, password });
  };

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center`}
    >
      <Back text="LogIn" background/>
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
              onChange={(text) => setName(text)}
              error={loginMutation.isError}
            />
          </View>
          <View>
            <Text style={tw`${themeTextStyle} text-xl font-bold`}>
              Password
            </Text>
            <Input
              placeholder="Enter your password"
              onChange={(text) => setPassword(text)}
              pass
              error={loginMutation.isError}
            />
          </View>
          {loginMutation.isError && (<Text style={tw`text-red-500 text-sm`}>Username or password are incorrect</Text>)}
          <TouchableOpacity onPress={handleLogin}>
            <Button
              text={loginMutation.isLoading ? "Logging in..." : "Login"}
            />
          </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("Choose" as never)}
            style={tw`${themeTextStyle} my-auto`}
          >
            Don't have an account?{" "}
            <Text style={tw`text-sky-400 font-bold`}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
