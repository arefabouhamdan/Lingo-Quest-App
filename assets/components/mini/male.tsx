import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import ManHairOne from "../../images/character/mini/male/manHairOne";
import ManHairTwo from "../../images/character/mini/male/manHairTwo";
import ManHairThree from "../../images/character/mini/male/manHairThree";
import MaleFace from "../../images/character/mini/male/maleFace";
import ManShirt from "../../images/character/mini/male/manShirt";
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
    ManHairOne,
    ManHairTwo,
    ManHairThree,
  }
};

const Male = ({ user }: AvatarProps) => {

  const HairComponent =
    avatarComponents.hair[user?.avatar?.hair.style] || (() => null);

  return (
    <View
      style={[
        tw`flex flex-col items-center justify-end`,
      ]}
    >
      <HairComponent hairColor={user?.avatar?.hair.color} style="relative top-4 z-2" />
      <Eyes eyeColor={user?.avatar?.eyes.color} style="relative top-3.5 z-1" />
      <MaleFace skinColor={user?.avatar?.skin.color} style=""/>
      <ManShirt shirtColor={user?.avatar?.shirt.color} style=""/>
    </View>
  );
};

export default Male;
