import React from "react";
import { View } from "react-native";
import ManHairOne from "../images/character/manHairOne";
import ManHairTwo from "../images/character/manHairTwo";
import ManHairThree from "../images/character/manHairThree";
import MaleFace from "../images/character/maleFace";
import Eyes from "../images/character/Eyes";
import MaleEyes from "../images/character/maleEyes";
import ManShirt from "../images/character/manShirt";
import tw from "twrnc";
import WomanShirt from "../images/character/womanShirt";
import WomanFace from "../images/character/womanFace";
import WomanHairTwo from "../images/character/womanHairTwo";
import WomanHairThree from "../images/character/womanHairThree";

const Avatar = () => {
  const user = {
    type: "student",
    avatar: {
      gender: 'female',
      hair: { color: "#674238", style: "ManHairOne" },
      skin: { color: "#E7BC98", style: "MaleFace" },
      eyes: { color: "#1E81C8", style: "Eyes" },
      shirt: { color: "#484848", style: "ManShirt" },
    },
  };

  return (
    user.avatar.gender == 'male' ? (
    <View style={tw`flex flex-col items-center justify-end absolute`}>
      <ManHairTwo hairColor={user.avatar.hair.color} style="relative top-17 z-1"/>
      <MaleEyes eyeColor={user.avatar.eyes.color} style="relative top-14.5 z-2"/>
      <MaleFace skinColor={user.avatar.skin.color} />
      <ManShirt shirtColor={user.avatar.shirt.color} />
    </View>
    ) : (
      <View style={tw`flex flex-col items-center justify-end absolute`}>
        <WomanHairThree hairColor={user.avatar.hair.color} style="relative top-40.8 z-1"/>
        <MaleEyes eyeColor={user.avatar.eyes.color} style="relative top-11 z-2"/>
        <WomanFace skinColor={user.avatar.skin.color} />
        <WomanShirt shirtColor={user.avatar.shirt.color} />
      </View>
    )
  );
};

export default Avatar;
