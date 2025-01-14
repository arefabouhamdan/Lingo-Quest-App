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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();

  const handleLogin = () => {
    loginMutation.mutate({ email, password });
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
              Email
            </Text>
            <Input
              placeholder="Enter your email"
              onChange={(text) => setEmail(text)}
              error={loginMutation.isError }
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
              error={loginMutation.isError }
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
