import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

type BackProps = {
  text?: string;
  background?: boolean;
  setModalVisible?: (visible: boolean) => void;
};

const Back = ({ text, background, setModalVisible }: BackProps) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { themeTextStyle } = useTheme();
  const textStyle = background ? "text-white" : themeTextStyle;
  const backgroundStyle = background ? "bg-sky-400" : "";
  const handleBack = () => {
    if (setModalVisible) {
      setModalVisible(true);
    } else {
      navigation.goBack();
    }
  }

  return (
    <View
      style={tw`w-full h-15 items-center justify-center ${backgroundStyle}`}
    >
      <TouchableOpacity
        onPress={handleBack}
        style={tw`flex-row p-2 w-full absolute`}
      >
        <Icon
          name="chevron-back-outline"
          color={!background && colorScheme === "light" ? "#000" : "#fff"}
          size={26}
        />
      </TouchableOpacity>
      <Text style={tw`${textStyle} text-xl font-medium text-center p-2`}>
        {text}
      </Text>
    </View>
  );
};

export default Back;
