import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import WomanHairTwo from "../images/character/womanHairTwo";
import WomanHairThree from "../images/character/womanHairThree";
import WomanFace from "../images/character/womanFace";
import WomanShirt from "../images/character/womanShirt";
import Eyes from "../images/character/Eyes";
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

const avatarComponents = {
  hair: {
    WomanHairTwo,
    WomanHairThree,
  },
  face: {
    WomanFace,
  },
  shirt: {
    WomanShirt,
  },
  eyes: {
    Eyes,
    FemaleEyes,
  },
};

const FemaleAvatar = ({ user }: AvatarProps) => {
  const HairComponent =
    avatarComponents.hair[user?.avatar?.hair.style] || (() => null);
  const FaceComponent =
    avatarComponents.face[user?.avatar?.skin.style] || (() => null);
  const ShirtComponent =
    avatarComponents.shirt[user?.avatar?.shirt.style] || (() => null);
  const EyesComponent =
    avatarComponents.eyes[user?.avatar?.eyes.style] || (() => null);

  return (
    <View
      style={[
        tw`flex flex-col items-center justify-end w-full h-1/3`,
        { backgroundColor: user?.avatar?.background.color || "#000" },
      ]}
    >
      <HairComponent
        hairColor={user?.avatar?.hair.color || "#000"}
        style="relative top-41 z-2"
      />
      <EyesComponent
        eyeColor={user?.avatar?.eyes.color || "#000"}
        style="relative top-11 z-1"
      />
      <FaceComponent skinColor={user?.avatar?.skin.color || "#000"} />
      <ShirtComponent shirtColor={user?.avatar?.shirt.color || "#000"} />
    </View>
  );
};

export default FemaleAvatar;
