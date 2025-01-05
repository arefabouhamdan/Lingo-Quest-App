import React from "react";
import { View } from "react-native";
import ManHairOne from "../images/character/manHairOne";
import ManHairTwo from "../images/character/manHairTwo";
import ManHairThree from "../images/character/manHairThree";
import MaleFace from "../images/character/maleFace";
import Eyes from "../images/character/Eyes";
import ManShirt from "../images/character/manShirt";
import tw from "twrnc";

const Avatar = () => {
  const user = {
    type: "student",
    avatar: {
      hair: { color: "#674238", style: "ManHairOne" },
      skin: { color: "#E7BC98", style: "MaleFace" },
      eyes: { color: "#1E81C8", style: "Eyes" },
      shirt: { color: "#484848", style: "ManShirt" },
    },
  };

  return (
    <View style={tw`flex flex-col items-center justify-end absolute`}>
      <ManHairThree hairColor={user.avatar.hair.color} style="relative top-17"/>
      <Eyes eyeColor={user.avatar.eyes.color} style="relative top-14.5"/>
      <MaleFace skinColor={user.avatar.skin.color} />
      <ManShirt shirtColor={user.avatar.shirt.color} />
    </View>
  );
};

export default Avatar;
