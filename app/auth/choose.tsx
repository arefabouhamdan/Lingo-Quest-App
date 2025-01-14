import { Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import tw from "twrnc";
import Button from "../../assets/components/Button";
import Back from "@/assets/components/Back";

const Choose = () => {
  const { themeTextStyle, themeViewStyle } = useTheme();

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back/>
      <View style={tw`flex flex-col items-center my-auto gap-20`}>
        <Image
          source={require("../../assets/images/game/guide-choose.png")}
          style={tw`w-52 h-68 mb-5`}
        />
        <View style={tw`flex items-center gap-2`}>
          <Text style={tw`${themeTextStyle} my-auto text-xl font-bold`}>
            Choose your role
          </Text>
          <Button text="Student" press="Student" type="submit"/>
          <Button text="Tutor" press="Tutor" type="submit"/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Choose;
