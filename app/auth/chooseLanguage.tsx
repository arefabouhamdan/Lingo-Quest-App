import { useState } from "react";
import { Text, Image, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import tw from "twrnc";
import Button from "../../assets/components/Button";
import Back from "@/assets/components/Back";
import { languages } from "../../assets/utils/languages";

const ChooseLanguage = () => {
  const { themeTextStyle, themeViewStyle } = useTheme();
  const [language, setLanguage] = useState("English");

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
              <TouchableOpacity style={tw`m-2 ${item.name == language ? 'opacity-100': 'opacity-50'}`} onPress={() => {setLanguage(item.name)}}>
                <Image source={item.source} />
              </TouchableOpacity>
            )}
            horizontal={false}
            numColumns={3}
          />
          <Button text="Continue" press="CreateAvatar" type="submit" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseLanguage;
