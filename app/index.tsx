import { Text, useColorScheme, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import { useTheme } from "../assets/utils/useTheme";
import Button from "../assets/components/Button";

export default function Index() {
  const { themeTextStyle, themeViewStyle, statusBarStyle, statusBarBackgroundColor } = useTheme();

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <StatusBar
        backgroundColor={statusBarBackgroundColor}
      />
      
    </SafeAreaView>
  );
}
