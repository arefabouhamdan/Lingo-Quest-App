import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

type ButtonProps = {
  style: string;
  image: boolean;
  text: string;
  press: string;
  type: string;
};

const Button = ({style, image, text, press, type } : ButtonProps) => {
  const navigation = useNavigation();
  const loginStyle = "w-60";
  const submitStyle = "w-42"

  return (
    <TouchableOpacity style={tw`${style} ${type == 'submit'? submitStyle : loginStyle} bg-sky-400 rounded-2 h-11 mt-5 flex flex-row justify-center items-center gap-5`}  onPress={() => navigation.navigate(press as never)}>
      {image && (
        <Image
          style={tw`w-7 h-7`}
          source={require("../images/icons/google.png")}
        />
      )}
      <Text style={tw`text-white font-bold text-lg`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
