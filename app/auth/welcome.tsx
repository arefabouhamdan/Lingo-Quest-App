import { Text, useColorScheme, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../assets/utils/useTheme";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import Button from "../../assets/components/Button";

const Welcome = () => {
  const { themeTextStyle, themeViewStyle } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <View style={tw`flex flex-col items-center my-auto gap-20`}>
        <Image
          source={require('../../assets/images/game/guide-no-hello.png')}
          style={tw`w-48 h-60 mb-5`}
        />
        <View>
          <Button text="Login" press="Login"/>
          <Button image text="Login with Google"/>
        </View>
      </View>
      <Text onPress={() => navigation.navigate('Choose')} style={tw`${themeTextStyle} my-auto`}>
        Don't have an account? <Text style={tw`text-sky-400 font-bold`}>Sign up</Text>
      </Text>
    </SafeAreaView>
  );
}

export default Welcome;