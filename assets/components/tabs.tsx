import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../utils/useTheme";
import Colors from "./colors";
import tw from "twrnc";

const Tabs = () => {
  const { themeTextStyle } = useTheme();
  const [active, setActive] = useState("hair");
  const fontStyle = "font-bold text-lg py-2";
  const activeStyle = "border-b-2 border-white";

  return (
    <>
      <View style={tw`flex flex-row justify-between items-center w-full`}>
        <TouchableOpacity onPress={() => setActive("hair")}>
          <Text
            style={tw`${themeTextStyle} ${fontStyle} ${
              active === "hair" ? activeStyle : ""
            }`}
          >
            Hair
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive("eyes")}>
          <Text
            style={tw`${themeTextStyle} ${fontStyle} ${
              active === "eyes" ? activeStyle : ""
            }`}
          >
            Eyes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive("skin")}>
          <Text
            style={tw`${themeTextStyle} ${fontStyle} ${
              active === "skin" ? activeStyle : ""
            }`}
          >
            Skin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive("shirt")}>
          <Text
            style={tw`${themeTextStyle} ${fontStyle} ${
              active === "shirt" ? activeStyle : ""
            }`}
          >
            Shirt
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive("background")}>
          <Text
            style={tw`${themeTextStyle} ${fontStyle} ${
              active === "background" ? activeStyle : ""
            }`}
          >
            Background
          </Text>
        </TouchableOpacity>
      </View>
      <Colors />
    </>
  );
};

export default Tabs;
