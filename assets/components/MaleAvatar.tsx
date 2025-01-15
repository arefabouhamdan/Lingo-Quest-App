import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import ManHairOne from "../images/character/manHairOne";
import ManHairTwo from "../images/character/manHairTwo";
import ManHairThree from "../images/character/manHairThree";
import MaleFace from "../images/character/maleFace";
import ManShirt from "../images/character/manShirt";
import Eyes from "../images/character/Eyes";
import MaleEyes from "../images/character/maleEyes";

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
        { backgroundColor: user?.avatar?.background.color || "#000" },
      ]}
    >
      <HairComponent hairColor={user?.avatar?.hair.color || "#000"} style="relative top-17 z-2" />
      <Eyes eyeColor={user?.avatar?.eyes.color || "#000"} style="relative top-14.5 z-1" />
      <MaleFace skinColor={user?.avatar?.skin.color || "#000"} />
      <ManShirt shirtColor={"#000"} />
    </View>
  );
};

export default MaleAvatar;
