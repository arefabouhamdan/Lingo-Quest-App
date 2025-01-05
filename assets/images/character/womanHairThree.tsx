import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type HairProps = {
  hairColor: string;
};

const WomanHairThree = ({ hairColor }: HairProps, props: SvgProps) => {
  return (
    <Svg width={120} height={148} fill="none" {...props}>
      <Path
        fill={ hairColor }
        fillRule="evenodd"
        d="M58 91v-6h-1c16.016 0 29-12.984 29-29V44c0-16.016-12.984-29-29-29H43c-16.016 0-29 12.984-29 29v12c0 16.016 12.984 29 29 29h1v6H30.033C12.479 84.352 0 67.383 0 47.5 0 21.819 20.819 1 46.5 1c1.373 0 2.731.06 4.074.176C73.502.781 105.438 19.579 100 79.398c-5.6 61.6 8.5 57.834 19.5 47.5-.167 8-4.8 23.3-22 20.5-.31-.05-.615-.104-.916-.16L81.836 95.806a4.977 4.977 0 0 0-1.594-2.453A4.997 4.997 0 0 0 76 91H65.31l-.18-.882c-.712.311-1.433.606-2.163.882H58Z"
        clipRule="evenodd"
      />
      <Path
        fill={ hairColor }
        d="M48.5 4C41 19.333 21 49.9 1 49.5 3.667 37.333 16.9 11.2 48.5 4Z"
      />
      <Path
        fill={ hairColor }
        d="M85.273 21.395c-15.942 6.099-51.416 14.814-65.77.882 10.248-7.08 37.749-17.167 65.77-.882Z"
      />
    </Svg>
  );
};
export default WomanHairThree;
