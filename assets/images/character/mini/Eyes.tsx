import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import tw from "twrnc";

type EyesProps = {
    eyeColor: string;
    style?: string;
};

const Eyes = ({eyeColor, style} : EyesProps , props: SvgProps) => {
  return (
    <Svg width={25} height={29} fill="none"  viewBox="0 0 49 29"  {...props} style={tw`${style || ''}`}>
      <Path
        fill="#fff"
        d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10v8.75c0 5.523-4.477 10-10 10s-10-4.477-10-10V10Z"
      />
      <Path
        fill={eyeColor}
        d="M11 10a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-9Z"
      />
      <Path
        fill="#fff"
        d="M15 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM29 10c0-5.523 4.477-10 10-10s10 4.477 10 10v8.75c0 5.523-4.477 10-10 10s-10-4.477-10-10V10Z"
      />
      <Path
        fill={eyeColor}
        d="M40 10a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-9Z"
      />
      <Path fill="#fff" d="M44 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    </Svg>
  );
};

export default Eyes;
