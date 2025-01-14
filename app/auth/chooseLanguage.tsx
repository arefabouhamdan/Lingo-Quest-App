import { Text, Image, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../assets/utils/useTheme";
import tw from "twrnc";
import Button from "../../assets/components/Button";
import Back from "@/assets/components/Back";
import { languages } from "../../assets/utils/languages";

const ChooseLanguage = () => {
  const { themeTextStyle, themeViewStyle } = useTheme();

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back />
      <View style={tw`flex flex-col items-center my-auto gap-20`}>
        <Image
          source={require("../../assets/images/game/guide-choose.png")}
          style={tw`w-52 h-68 mb-5`}
        />
        <FlatList
          data={languages}
          renderItem={({ item }) => (
            <TouchableOpacity style={tw`m-2`} onPress={() => {}}>
              <Image source={item.source} />
            </TouchableOpacity>
          )}
          horizontal={false}
          numColumns={3}
          style={tw`w-full h-full`}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChooseLanguage;
