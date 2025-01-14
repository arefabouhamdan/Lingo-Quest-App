import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import ManHairOne from "../images/character/manHairOne";
import ManHairTwo from "../images/character/manHairTwo";
import ManHairThree from "../images/character/manHairThree";
import WomanHairTwo from "../images/character/womanHairTwo";
import WomanHairThree from "../images/character/womanHairThree";
import MaleFace from "../images/character/maleFace";
import WomanFace from "../images/character/womanFace";
import ManShirt from "../images/character/manShirt";
import WomanShirt from "../images/character/womanShirt";
import Eyes from "../images/character/Eyes";
import MaleEyes from "../images/character/maleEyes";
import FemaleEyes from "../images/character/femaleEyes";

type AvatarProps = {
  hairColor: string;
  eyeColor: string;
  skinColor: string;
  shirtColor: string;
  backgroundColor: string;
  gender: string;
};

const CustomizeAvatar = ({
  hairColor,
  eyeColor,
  skinColor,
  shirtColor,
  backgroundColor,
  gender,
}: AvatarProps) => {
  return (
    <View
      style={[
        tw`flex flex-col items-center justify-end w-full`,
        { backgroundColor: backgroundColor },
      ]}
    >
      <WomanHairThree hairColor={hairColor} style="relative top-17 z-2" />
      <Eyes eyeColor={eyeColor} style="relative top-14.5 z-1" />
      <WomanFace skinColor={skinColor} />
      <WomanShirt shirtColor={shirtColor} />
    </View>
  );
};

export default CustomizeAvatar;
