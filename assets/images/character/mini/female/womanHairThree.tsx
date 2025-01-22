import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import tw from "twrnc";

type HairProps = {
  hairColor: string;
  style?: string;
};

const WomanHairThree = ({ hairColor, style }: HairProps, props: SvgProps) => {
  return (
    <Svg
      width={35}
      height={37}
      fill="none"
      viewBox="0 0 140 140"
      {...props}
      style={tw`${style || ""}`}
    >
      <Path
        fill={hairColor}
        fillRule="evenodd"
        d="M78 90v-6h-1c16.016 0 29-12.984 29-29V43c0-16.016-12.984-29-29-29H63c-16.016 0-29 12.984-29 29v12c0 16.016 12.984 29 29 29h1v6H50.033C32.479 83.352 20 66.383 20 46.5 20 20.819 40.819 0 66.5 0c1.373 0 2.731.06 4.074.176C93.502-.219 125.438 18.579 120 78.398c-5.6 61.6 8.5 57.834 19.5 47.5-.167 8-4.8 23.3-22 20.5-.309-.05-.615-.104-.916-.16l-14.748-51.432a4.975 4.975 0 0 0-1.594-2.454A4.996 4.996 0 0 0 96 90H85.31l-.18-.882c-.712.311-1.433.606-2.163.882H78Z"
        clipRule="evenodd"
      />
      <Path
        fill={hairColor}
        d="M68.5 3C61 18.333 41 48.9 21 48.5 23.667 36.333 36.9 10.2 68.5 3Z"
      />
      <Path
        fill={hairColor}
        d="M105.273 20.395c-15.942 6.099-51.416 14.814-65.77.882 10.248-7.08 37.749-17.167 65.77-.882Z"
      />
    </Svg>
  );
};
export default WomanHairThree;
