import React from "react";
import { TextInput } from "react-native";
import tw from "twrnc";

type InputProps = {
  placeholder: string;
  error?: boolean;
  pass?: boolean;
  onChange?: (text: string) => void;
};

const Input = ({placeholder , error, onChange, pass} : InputProps) => {
  const errorStyle = error ? `border-red-500` : `border-gray-200`;
  return (
    <TextInput
      style={[tw`${errorStyle} text-white w-90 h-11 rounded-2 border mt-2 pl-3`]}
      placeholder={placeholder}
      placeholderTextColor="white"
      onChangeText={onChange}
      secureTextEntry={pass}
    />
  );
};

export default Input;
