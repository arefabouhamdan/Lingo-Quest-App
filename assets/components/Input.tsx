import React from "react";
import { TextInput } from "react-native";
import tw from "twrnc";

type InputProps = {
  placeholder: string;
};

const Input = ({placeholder} : InputProps) => {
  return (
    <TextInput
      style={tw`text-white bg-sky-400 w-90 h-11 rounded-2 mt-2 pl-3`}
      placeholder={placeholder}
      placeholderTextColor="white"
    />
  );
};

export default Input;
