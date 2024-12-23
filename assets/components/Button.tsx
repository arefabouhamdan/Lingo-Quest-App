import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const Button = ({style = "", image = false, text = '', press = '', type = '' }) => {
  const navigation = useNavigation();
  const loginStyle = "w-60";
  const submitStyle = "w-42"

  return (
    <TouchableOpacity style={tw`${style} ${type == 'submit'? submitStyle : loginStyle} bg-sky-400 rounded-2 h-11 mt-5 flex flex-row justify-center items-center gap-5`}  onPress={() => navigation.navigate(press)}>
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
