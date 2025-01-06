import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../utils/useTheme";
import tw from "twrnc";

type TabsProps = {
  active: string;
  setActive: (active: string) => void;
};

const Tabs = () => {
  const { themeTextStyle } = useTheme();
  const [active, setActive] = useState("hair");
  const fontStyle = "font-bold text-lg py-2";
  const activeStyle = "border-b-2 border-white";

  return (
    <>
      <TouchableOpacity onPress={() => setActive("hair")}>
        <Text
          style={tw`${themeTextStyle} ${fontStyle} ${active === "hair" ? activeStyle : ''}`}
        >
          Hair
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive("eyes")}>
        <Text
          style={tw`${themeTextStyle} ${fontStyle} ${active === "eyes" ? activeStyle : ''}`}
        >
          Eyes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive("skin")}>
        <Text
          style={tw`${themeTextStyle} ${fontStyle} ${active === "skin" ? activeStyle : ''}`}
        >
          Skin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive("shirt")}>
        <Text
          style={tw`${themeTextStyle} ${fontStyle} ${active === "shirt" ? activeStyle : ''}`}
        >
          Shirt
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive("background")}>
        <Text
          style={tw`${themeTextStyle} ${fontStyle} ${active === "background" ? activeStyle : ''}`}
        >
          Background
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Tabs;
