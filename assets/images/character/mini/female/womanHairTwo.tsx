import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import tw from "twrnc";

type HairProps = {
  hairColor: string;
  style?: string;
};

const WomanHairTwo = ({ hairColor, style }: HairProps, props: SvgProps) => {
  return (
    <Svg width={36} height={38} fill="none" viewBox="0 0 144 135" {...props} style={tw`${style || ''}`}>
      <Path
        fill={ hairColor }
        fillRule="evenodd"
        d="M80 91v-6h-1c16.016 0 29-12.984 29-29V44c0-16.016-12.984-29-29-29H65c-16.016 0-29 12.984-29 29v12c0 16.016 12.984 29 29 29h1v6H52.033C34.479 84.352 22 67.383 22 47.5 22 21.819 42.819 1 68.5 1c1.373 0 2.731.06 4.074.176C95.502.781 127.438 19.579 122 79.398c-5.6 61.6 8.5 57.834 19.5 47.5-.167 8-4.8 23.3-22 20.5-.309-.05-.615-.104-.916-.16l-14.748-51.432a4.975 4.975 0 0 0-1.594-2.453A4.995 4.995 0 0 0 98 91H87.31l-.18-.882c-.712.311-1.433.606-2.163.882H80Z"
        clipRule="evenodd"
      />
      <Path
        fill={ hairColor }
        d="M70.5 4C63 19.333 43 49.9 23 49.5 25.667 37.333 38.9 11.2 70.5 4Z"
      />
      <Path
        fill={ hairColor }
        d="M107.273 21.395c-15.942 6.099-51.416 14.814-65.77.882 10.248-7.08 37.749-17.167 65.77-.882Z"
      />
      <Path
        fill={ hairColor }
        fillRule="evenodd"
        d="M56.533 91c-.73-.276-1.45-.57-2.163-.882l-.18.882H48.5c-1.79 0-3.359.94-4.242 2.353a4.977 4.977 0 0 0-1.594 2.453l-14.314 49.92c-1.907.728-4.012 1.292-6.35 1.672-17.2 2.8-21.833-12.5-22-20.5 11 10.334 25.1 14.1 19.5-47.5C14.062 19.58 45.998.781 68.926 1.176A47.104 47.104 0 0 1 73 1c25.681 0 46.5 20.819 46.5 46.5 0 19.883-12.479 36.852-30.033 43.5H80.5v-6h-4c16.016 0 29-12.984 29-29V44c0-16.016-12.984-29-29-29h-14c-16.016 0-29 12.984-29 29v12c0 16.016 12.984 29 29 29h4v6h-9.967Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default WomanHairTwo;
