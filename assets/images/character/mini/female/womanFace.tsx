import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type SkinProps = {
  skinColor: string;
};

const WomanFace = ({ skinColor }: SkinProps, props: SvgProps) => {
  return (
    <Svg width={18} height={18} fill="none" viewBox="0 0 72 71" {...props}>
      <Path
        fill={ skinColor }
        d="M0 20C0 8.954 8.954 0 20 0h32c11.046 0 20 8.954 20 20v21c0 16.569-13.431 30-30 30H30C13.431 71 0 57.569 0 41V20Z"
      />
      <Path
        stroke="#C3946D"
        strokeLinecap="round"
        strokeWidth={4}
        d="M25 49c1.167 2.833 5.6 8.1 14 6.5"
      />
      <Path
        fill="#C3946D"
        d="M42.5 45.25c0-1.872-2.077-3.822-2.775-4.425a.375.375 0 0 0-.45 0c-.698.603-2.775 2.553-2.775 4.425a3 3 0 0 0 6 0Z"
      />
    </Svg>
  );
};
export default WomanFace;
