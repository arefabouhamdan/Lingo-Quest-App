import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import ManHairOne from "../images/character/manHairOne";
import ManHairTwo from "../images/character/manHairTwo";
import ManHairThree from "../images/character/manHairThree";
import MaleFace from "../images/character/maleFace";
import ManShirt from "../images/character/manShirt";
import Eyes from "../images/character/Eyes";
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

const MaleAvatar = ({ user }: AvatarProps) => {

  const HairComponent =
    avatarComponents.hair[user?.avatar?.hair.style] || (() => null);

  return (
    <View
      style={[
        tw`flex flex-col items-center justify-end w-full h-1/3`,
        { backgroundColor: user?.avatar?.background.color },
      ]}
    >
      <HairComponent hairColor={user?.avatar?.hair.color} style="relative top-17 z-2" />
      <Eyes eyeColor={user?.avatar?.eyes.color} style="relative top-14.5 z-1" />
      <MaleFace skinColor={user?.avatar?.skin.color} />
      <ManShirt shirtColor={user?.avatar?.shirt.color} />
    </View>
  );
};

export default MaleAvatar;
