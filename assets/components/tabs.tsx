import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useTheme } from "../utils/useTheme";
import { HairColors } from "../utils/hairColors";
import tw from "twrnc";
import { EyeColors } from "../utils/eyeColors";
import { SkinColors } from "../utils/skinColors";
import { ShirtColors } from "../utils/shirtColors";
import { BgColors } from "../utils/bgColors";
import Icon from "react-native-vector-icons/Ionicons";

type TabsProps = {
  setHairColor: (color: string) => void;
  setEyeColor: (color: string) => void;
  setSkinColor: (color: string) => void;
  setShirtColor: (color: string) => void;
  setBackgroundColor: (color: string) => void;
};

const Tabs = ({
  setHairColor,
  setEyeColor,
  setSkinColor,
  setShirtColor,
  setBackgroundColor,
}: TabsProps) => {
  const { themeTextStyle } = useTheme();
  const [active, setActive] = useState("hair");
  const [selectedHair, setSelectedHair] = useState("#4B3621");
  const [selectedSkin, setSelectedSkin] = useState("#0F52BA");
  const [selectedEye, setSelectedEye] = useState("#F5CBA7");
  const [selectedBg, setSelectedBg] = useState("#000000");
  const [selectedShirt, setSelectedShirt] = useState("#ADD8E6");
  const fontStyle = "font-bold text-lg py-2";
  const activeStyle = "border-b-2 border-white";

  return (
    <>
      <View
        style={tw`flex flex-row justify-between items-center w-full px-5 my-5`}
      >
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
                tw`${
                  item.color == selectedHair ? "p-5.5" : "p-10"
                } mb-5 mx-auto rounded-3 flex items-center justify-center`,
                { backgroundColor: item.color },
              ]}
              onPress={() => {
                setHairColor(item.color), setSelectedHair(item.color);
              }}
            >
              <View>
                {item.color == selectedHair && (
                  <Icon name="checkmark-outline" size={36} />
                )}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={4}
          style={tw`w-full h-full`}
        />
      )}
      {active == "eyes" && (
        <FlatList
          data={EyeColors}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`${
                  item.color == selectedEye ? "p-5.5" : "p-10"
                } mb-5 mx-auto rounded-3 flex items-center justify-center`,
                { backgroundColor: item.color },
              ]}
              onPress={() => {
                setEyeColor(item.color), setSelectedEye(item.color);
              }}
            >
              <View>
                {item.color == selectedEye && (
                  <Icon name="checkmark-outline" size={36} />
                )}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={4}
          style={tw`w-full h-full`}
        />
      )}
      {active == "skin" && (
        <FlatList
          data={SkinColors}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`${
                  item.color == selectedSkin ? "p-5.5" : "p-10"
                } mb-5 mx-auto rounded-3 flex items-center justify-center`,
                { backgroundColor: item.color },
              ]}
              onPress={() => {
                setSkinColor(item.color), setSelectedSkin(item.color);
              }}
            >
              <View>
                {item.color == selectedSkin && (
                  <Icon name="checkmark-outline" size={36} />
                )}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={4}
          style={tw`w-full h-full`}
        />
      )}
      {active == "shirt" && (
        <FlatList
          data={ShirtColors}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`${
                  item.color == selectedShirt ? "p-5.5" : "p-10"
                } mb-5 mx-auto rounded-3 flex items-center justify-center`,
                { backgroundColor: item.color },
              ]}
              onPress={() => {
                setShirtColor(item.color), setSelectedShirt(item.color);
              }}
            >
              <View>
                {item.color == selectedShirt && (
                  <Icon name="checkmark-outline" size={36} />
                )}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={4}
          style={tw`w-full h-full`}
        />
      )}
      {active == "background" && (
        <FlatList
          data={BgColors}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`${
                  item.color == selectedBg ? "p-5.5" : "p-10"
                } mb-5 mx-auto rounded-3 flex items-center justify-center`,
                { backgroundColor: item.color },
              ]}
              onPress={() => {
                setBackgroundColor(item.color), setSelectedBg(item.color);
              }}
            >
              <View>
                {item.color == selectedBg && (
                  <Icon name="checkmark-outline" size={36} />
                )}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          numColumns={4}
          style={tw`w-full h-full`}
        />
      )}
    </>
  );
};

export default Tabs;
