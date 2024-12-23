import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import tw from 'twrnc';

const Button = ({style = "", image = false, text = '' }) => {

  return (
    <TouchableOpacity style={tw`${style} bg-sky-400 rounded-2 w-60 h-11 mt-5 flex flex-row justify-center items-center gap-2`}>
      {image && (
        <Image
          style={tw`w-7 h-7`}
          source={require("../images/icons/google.png")}
        />
      )}
      <Text style={tw`text-white font-bold`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
