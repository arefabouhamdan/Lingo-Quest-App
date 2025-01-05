import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import tw from "twrnc";

type HairProps = {
  hairColor: string;
  style?: string;
};

const WomanHairOne = ({ hairColor, style }: HairProps, props: SvgProps) => {
  return (
    <Svg width={85} height={121} fill="none" {...props} style={tw`${style || ''}`}>
      <Path
        fill={ hairColor }
        d="M0 42.5C0 19.028 19.028 0 42.5 0S85 19.028 85 42.5v36c0 23.472-19.028 42.5-42.5 42.5S0 101.972 0 78.5v-36Z"
      />
      <Path
        fill="#fff"
        d="M4 45c0-13.807 11.193-25 25-25h27c13.807 0 25 11.193 25 25v20.93c0 16.57-13.431 30-30 30H34c-16.569 0-30-13.43-30-30V45Z"
      />
      <Path
        stroke="#8F7627"
        strokeLinecap="round"
        strokeWidth={2}
        d="M23 115c10.532-1.902 34.45-8.347 42-19"
      />
    </Svg>
  );
};
export default WomanHairOne;
