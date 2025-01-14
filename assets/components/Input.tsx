import React from "react";
import { TextInput } from "react-native";
import tw from "twrnc";

type InputProps = {
  placeholder: string;
};

const Input = ({placeholder} : InputProps) => {
  return (
    <TextInput
      style={tw`text-white w-90 h-11 rounded-2 border border-gray-200 mt-2 pl-3`}
      placeholder={placeholder}
      placeholderTextColor="white"
    />
  );
};

export default Input;
