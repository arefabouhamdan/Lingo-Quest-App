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
import Icon from "react-native-vector-icons/Ionicons";

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
      {gender === "female" ? (
        <>
          <WomanHairThree hairColor={hairColor} style="relative top-17 z-2" />
          <View
            style={tw`flex top-15 flex-row justify-between items-center w-1/2`}
          >
            <Icon name="arrow-back-outline" size={36} />
            <Icon name="arrow-forward-outline" size={36} />
          </View>
          <Eyes eyeColor={eyeColor} style="relative top-14.5 z-1" />
          <WomanFace skinColor={skinColor} />
          <WomanShirt shirtColor={shirtColor} />
        </>
      ) : (
        <>
          <ManHairThree hairColor={hairColor} style="relative top-17 z-2" />
          <View
            style={tw`top-15 flex flex-row justify-between items-center w-1/2`}
          >
            <Icon name="arrow-back-outline" size={36} />
            <Icon name="arrow-forward-outline" size={36} />
          </View>
          <Eyes eyeColor={eyeColor} style="relative top-14.5 z-1" />
          <MaleFace skinColor={skinColor} />
          <ManShirt shirtColor={shirtColor} />
        </>
      )}
    </View>
  );
};

export default CustomizeAvatar;
