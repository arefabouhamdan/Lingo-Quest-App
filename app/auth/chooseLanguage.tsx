import { useState, useEffect } from "react";
import { Text, Image, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import tw from "twrnc";
import Button from "../../assets/components/Button";
import Back from "@/assets/components/Back";
import { languages } from "../../assets/utils/languages";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const ChooseLanguage = () => {
  const navigation = useNavigation();
  const [type, setType] = useState<string | null>(null);
  const { themeTextStyle, themeViewStyle } = useTheme();
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const fetchUserType = async () => {
      const userType = await AsyncStorage.getItem("user_type");
      setType(userType);
    };
    fetchUserType();
  }, []);

  const nextScreen = type == "user" ? "Home" : "TutorHome";

  const handlePress = async (language) => {
    try {
      await AsyncStorage.setItem("user_type", language);

      navigation.navigate(`${nextScreen}` as never);
    } catch (error) {
      console.log("Error saving user role:", error);
    }
  };

  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 `}>
      <Back />
      <View style={tw`flex flex-col items-center`}>
        <Image
          source={require("../../assets/images/game/guide-choose.png")}
          style={tw`w-52 h-68 mb-5`}
        />
        <View style={tw`flex flex-col items-center gap-5 h-100`}>
          <Text style={tw`${themeTextStyle} text-xl font-bold`}>
            Choose a language to learn
          </Text>
          <FlatList
            data={languages}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={tw`m-2 ${
                  item.name == language ? "opacity-100" : "opacity-50"
                }`}
                onPress={() => {
                  setLanguage(item.name);
                }}
              >
                <Image source={item.source} />
              </TouchableOpacity>
            )}
            horizontal={false}
            numColumns={3}
          />
          <TouchableOpacity onPress={() => handlePress(language)}>
            <Button text="Continue" type="submit" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseLanguage;
