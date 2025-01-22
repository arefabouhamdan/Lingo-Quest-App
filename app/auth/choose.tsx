import { Text, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import tw from "twrnc";
import Button from "../../assets/components/Button";
import Back from "@/assets/components/Back";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Choose = () => {
  const navigation = useNavigation();
  const { themeTextStyle, themeViewStyle } = useTheme();
  const handlePress = async (type) => {
    try {
      await AsyncStorage.setItem("user_type", type);
      navigation.navigate(`${type}` as never);
    } catch (error) {
      console.log("Error saving user role:", error);
    }
  };

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back text="Choose Role" background/>
      <View style={tw`flex flex-col items-center my-auto gap-20`}>
        <Image
          source={require("../../assets/images/game/guide-choose.png")}
          style={tw`w-52 h-68 mb-5`}
        />
        <View style={tw`flex items-center gap-2`}>
          <Text style={tw`${themeTextStyle} my-auto text-xl font-bold`}>
            Choose your role
          </Text>
          <TouchableOpacity
            onPress={() => {
              handlePress("user");
            }}
          >
            <Button text="Student" type="submit" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handlePress("tutor");
            }}
          >
            <Button text="Tutor" type="submit" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Choose;
