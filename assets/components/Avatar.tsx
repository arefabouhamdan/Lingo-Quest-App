import React from "react";
import { View } from "react-native";
import ManHairOne from "../images/character/manHairOne";
import MaleFace from "../images/character/maleFace";
import Eyes from "../images/character/Eyes";
import ManShirt from "../images/character/manShirt";

const Avatar = () => {
    const user = {
    type: "student",
    avatar: {
        hair: { color: "#674238", style: "ManHairOne" },
        skin: {color: "#E7BC98", style: "MaleFace"},
        eyes: {color: "#1E81C8", style: "Eyes"},
        shirt: {color: "#484848", style: "ManShirt"},
    },
    }
  return (
    <View>
      <ManHairOne hairColor={user.avatar.hair.color} />
      <Eyes eyeColor={user.avatar.eyes.color} />
      <MaleFace skinColor={user.avatar.skin.color} />
      <ManShirt shirtColor={user.avatar.shirt.color} />
    </View>
  );
};

export default Avatar;
