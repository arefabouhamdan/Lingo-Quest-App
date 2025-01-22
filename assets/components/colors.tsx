import React from "react";
import { View, FlatList, Touchable, TouchableOpacity } from "react-native";
import tw from "twrnc";

const Colors = () => {
  const colors = [
    {
      id: "1",
      color: "#4FC0E8",
      name: "Sky Blue",
    },
    {
      id: "2",
      color: "#674238",
      name: "Brown",
    },
    {
      id: "3",
      color: "#E7BC98",
      name: "Skin",
    },
    {
      id: "4",
      color: "#1E81C8",
      name: "Blue",
    },
    {
      id: "5",
      color: "#484848",
      name: "Grey",
    },
    {
      id: "6",
      color: "#F2F2F2",
      name: "Light Grey",
    },
    {
      id: "7",
      color: "#000000",
      name: "Black",
    },
    {
      id: "8",
      color: "#FFFFFF",
      name: "White",
    },
    {
      id: "9",
      color: "#FF0000",
      name: "Red",
    },
    {
      id: "10",
      color: "#00FF00",
      name: "Green",
    },
    {
      id: "11",
      color: "#0000FF",
      name: "Blue",
    },
    {
      id: "12",
      color: "#FFFF00",
      name: "Yellow",
    },
    {
      id: "13",
      color: "#FF00FF",
      name: "Pink",
    },
    {
      id: "14",
      color: "#00FFFF",
      name: "Cyan",
    },
    {
      id: "15",
      color: "#800000",
      name: "Maroon",
    },
    {
      id: "16",
      color: "#008000",
      name: "Green",
    },
    {
      id: "17",
      color: "#000080",
      name: "Navy",
    },
    {
      id: "18",
      color: "#808000",
      name: "Olive",
    },
    {
      id: "19",
      color: "#800080",
      name: "Purple",
    },
    {
      id: "20",
      color: "#008080",
      name: "Teal",
    },
    {
      id: "21",
      color: "#808080",
      name: "Grey",
    },
    {
      id: "22",
      color: "#C0C0C0",
      name: "Silver",
    },
    {
      id: "23",
      color: "#FFA500",
      name: "Orange",
    },
    {
      id: "24",
      color: "#FFC0CB",
      name: "Pink",
    },
    {
      id: "25",
      color: "#FFD700",
      name: "Gold",
    },
    {
      id: "26",
      color: "#FF4500",
      name: "Orange Red",
    },
    {
      id: "27",
      color: "#FF6347",
      name: "Tomato",
    },
    {
      id: "28",
      color: "#FF69B4",
      name: "Hot Pink",
    },
    {
      id: "29",
      color: "#FFA07A",
      name: "Light Salmon",
    },
    {
      id: "30",
      color: "#FFB6C1",
      name: "Light Pink",
    },
    {
      id: "31",
      color: "#FFDAB9",
      name: "PeachPuff",
    },
    {
      id: "32",
      color: "#FFDEAD",
      name: "NavajoWhite",
    },
    {
      id: "33",
      color: "#FFE4B5",
      name: "Moccasin",
    },
    {
      id: "34",
      color: "#FFE4C4",
      name: "Bisque",
    },
    {
      id: "35",
      color: "#FFE4E1",
      name: "MistyRose",
    },
    {
      id: "36",
      color: "#FFEBCD",
      name: "BlanchedAlmond",
    },
    {
      id: "37",
      color: "#FFEFD5",
      name: "PapayaWhip",
    },
    {
      id: "38",
      color: "#FFF0F5",
      name: "LavenderBlush",
    },
    {
      id: "39",
      color: "#FFF5EE",
      name: "SeaShell",
    },
    {
      id: "40",
      color: "#FFF8DC",
      name: "Cornsilk",
    },
  ];
  return (
    <FlatList
      data={colors}
      renderItem={({ item }) => (
        <TouchableOpacity style={[tw`p-10 my-5 mx-auto rounded-3`, { backgroundColor: item.color }]} />
      )}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={4}
      style={tw`w-full h-full`}
    />
  );
};

export default Colors;
