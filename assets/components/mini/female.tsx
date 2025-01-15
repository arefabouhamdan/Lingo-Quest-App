import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import WomanHairTwo from "../../images/character/mini/female/womanHairTwo";
import WomanHairThree from "../../images/character/mini/female/womanHairThree";
import WomanFace from "../../images/character/mini/female/womanFace";
import WomanShirt from "../../images/character/mini/female/womanShirt";
import Eyes from "../../images/character/mini/Eyes";

type AvatarProps = {
  user: {
    type: string;
    avatar: {
      gender: string;
      background: { color: string };
      hair: { color: string; style: string };
      skin: { color: string; };
      eyes: { color: string; };
      shirt: { color: string; };
    };
  };
};

const avatarComponents = {
  hair: {
    WomanHairTwo,
    WomanHairThree,
  }
};

const Female = ({ user }: AvatarProps) => {
  const HairComponent =
    avatarComponents.hair[user?.avatar?.hair.style] || (() => null);

  return (
    <View
      style={[
        tw`flex flex-col items-center justify-end`,
      ]}
    >
      <HairComponent
        hairColor={user?.avatar?.hair.color || "#000"}
        style="relative top-10 z-2"
      />
      <Eyes
        eyeColor={user?.avatar?.eyes.color}
        style="relative top-2.5 z-1"
      />
      <WomanFace skinColor={user?.avatar?.skin.color} />
      <WomanShirt shirtColor={user?.avatar?.shirt.color} />
    </View>
  );
};

export default Female;
