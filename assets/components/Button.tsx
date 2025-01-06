import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

type ButtonProps = {
  image?: string;
  text: string;
  press: string;
  type: string;
};

const Button = ({ image, text, press, type }: ButtonProps) => {
  const navigation = useNavigation();
  const loginStyle = "w-60";
  const submitStyle = "w-52";

  return (
    <TouchableOpacity
      style={tw` ${
        type == "submit" ? submitStyle : loginStyle
      } bg-sky-400 rounded-2 h-14 mt-5 flex flex-row justify-center items-center gap-5`}
      onPress={() => navigation.navigate(press as never)}
    >
      {image && (
        <Icon
          name={image}
          color='white'
          size={26}
        />
      )}
      <Text style={tw`text-white font-bold text-lg`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
