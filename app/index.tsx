import { Text, useColorScheme, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Button from "../assets/components/Button";
import tw from "twrnc";

export default function Index() {
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === "light" ? "text-black" : "text-white";
  const themeViewStyle = colorScheme === "light" ? "bg-white" : "bg-gray-800";
  const statusBarStyle = colorScheme === "light" ? "dark" : "light";
  const statusBarBackgroundColor =
    colorScheme === "light" ? "#ffffff" : "#1F2937";

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <StatusBar
        style={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
      />
      <View style={tw`flex flex-col items-center my-auto gap-20`}>
        <Image
          source={require('../assets/images/game/guide-hello.png')}
          style={tw`w-48 h-60 mb-5`}
        />
        <View>
          <Button text="Login"/>
          <Button image text="Login with Google"/>
        </View>
      </View>
      <Text style={tw`${themeTextStyle} my-auto`}>
        Don't have an account? <Text style={tw`text-sky-400 font-bold`}>Sign up</Text>
      </Text>
    </SafeAreaView>
  );
}
