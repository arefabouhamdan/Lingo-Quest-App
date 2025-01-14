import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useTheme } from "../utils/useTheme";
import { HairColors } from "../utils/hairColors";
import tw from "twrnc";

type TabsProps = {
  setHairColor: (color: string) => void;
};

const Tabs = ({ setHairColor }: TabsProps) => {
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
      {active == "hair" && (
        <FlatList
          data={HairColors}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`p-10 my-5 mx-auto rounded-3`,
                { backgroundColor: item.color },
              ]}
              onPress={() => setHairColor(item.color)}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={4}
          style={tw`w-full h-full`}
        />
      )}
    </>
  );
};

export default Tabs;
