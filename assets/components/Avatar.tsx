import React from "react";
import { View } from "react-native";
import ManHairOne from "../images/character/manHairOne";
import ManHairTwo from "../images/character/manHairTwo";
import ManHairThree from "../images/character/manHairThree";
import MaleFace from "../images/character/maleFace";
import Eyes from "../images/character/Eyes";
import MaleEyes from "../images/character/maleEyes";
import FemaleEyes from "../images/character/femaleEyes";
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
      gender: 'male',
      hair: { color: "#674238", style: "ManHairOne" },
      skin: { color: "#E7BC98", style: "MaleFace" },
      eyes: { color: "#1E81C8", style: "Eyes" },
      shirt: { color: "#484848", style: "ManShirt" },
    },
  };

  const { avatar } = user;
  const { hair, skin, eyes, shirt, gender } = avatar;

  return (
    gender == 'male' ? (
    <View style={tw`flex flex-col items-center justify-end absolute`}>
      <ManHairTwo hairColor={hair.color} style="relative top-17 z-2"/>
      <MaleEyes eyeColor={eyes.color} style="relative top-14.5 z-1"/>
      <MaleFace skinColor={skin.color} />
      <ManShirt shirtColor={shirt.color} />
    </View>
    ) : (
      <View style={tw`flex flex-col items-center justify-end absolute`}>
        <WomanHairThree hairColor={hair.color} style="relative top-41.8 right-0.4 z-2"/>
        <FemaleEyes eyeColor={eyes.color} style="relative top-11 z-1"/>
        <WomanFace skinColor={skin.color} />
        <WomanShirt shirtColor={shirt.color} />
      </View>
    )
  );
};

export default Avatar;
