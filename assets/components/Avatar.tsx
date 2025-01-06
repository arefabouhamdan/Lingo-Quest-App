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
  user: {
    type: string;
    avatar: {
      gender: string;
      background: { color: string };
      hair: { color: string; style: string };
      skin: { color: string; style: string };
      eyes: { color: string; style: string };
      shirt: { color: string; style: string };
    };
  };
};

const Avatar = ({ user }: AvatarProps) => {
  const avatarComponents = {
    hair: {
      ManHairOne,
      ManHairTwo,
      ManHairThree,
      WomanHairTwo,
      WomanHairThree,
    },
    face: {
      MaleFace,
      WomanFace,
    },
    shirt: {
      ManShirt,
      WomanShirt,
    },
    eyes: {
      Eyes,
      MaleEyes,
      FemaleEyes,
    },
  };

  const { avatar } = user;
  const { hair, skin, eyes, shirt, background } = avatar;

  const HairComponent = avatarComponents.hair[hair.style];
  const FaceComponent = avatarComponents.face[skin.style];
  const ShirtComponent = avatarComponents.shirt[shirt.style];
  const EyesComponent = avatarComponents.eyes[eyes.style];

  return (
    <View style={[tw`flex flex-col items-center justify-end w-full`, { backgroundColor: background.color }]}>
      <HairComponent hairColor={hair.color} style="relative top-17 z-2" />
      <EyesComponent eyeColor={eyes.color} style="relative top-14.5 z-1" />
      <FaceComponent skinColor={skin.color} />
      <ShirtComponent shirtColor={shirt.color} />
    </View>
  );
};

export default Avatar;
