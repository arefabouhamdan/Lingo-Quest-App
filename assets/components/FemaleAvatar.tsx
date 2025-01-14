import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import WomanHairTwo from '../images/character/womanHairTwo';
import WomanHairThree from '../images/character/womanHairThree';
import WomanFace from '../images/character/womanFace';
import WomanShirt from '../images/character/womanShirt';
import Eyes from '../images/character/Eyes';
import FemaleEyes from '../images/character/femaleEyes';

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

const FemaleAvatar = ({ avatar }) => {
  const { hair, skin, eyes, shirt, background } = avatar;

  const HairComponent = avatarComponents.hair[hair.style];
  const FaceComponent = avatarComponents.face[skin.style];
  const ShirtComponent = avatarComponents.shirt[shirt.style];
  const EyesComponent = avatarComponents.eyes[eyes.style];

  return (
    <View style={[tw`flex flex-col items-center justify-end w-full h-1/3`, { backgroundColor: background.color }]}>
      <HairComponent hairColor={hair.color} style="relative top-41 z-2" />
      <EyesComponent eyeColor={eyes.color} style="relative top-11 z-1" />
      <FaceComponent skinColor={skin.color} />
      <ShirtComponent shirtColor={shirt.color} />
    </View>
  );
};

export default FemaleAvatar;