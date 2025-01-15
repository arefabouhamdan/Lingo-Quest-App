import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

type ShirtColor = {
  shirtColor: string;
};

const WomanShirt = ({ shirtColor }: ShirtColor, props: SvgProps) => {
  return (
    <Svg width={102} height={81} viewBox="0 0 102 81" fill="none" {...props}>
      <G fill={ shirtColor } clipPath="url(#a)">
        <Path d="M81.836 10.806a5 5 0 0 0-6.184-3.428L67 9.858l21.59 75.296 13.458-3.859-20.212-70.489ZM20.212 10.806a5 5 0 0 1 6.185-3.428l8.651 2.48-21.59 75.296L0 81.295l20.212-70.489ZM44 8h14V0H44z" />
        <Path d="M21 11a5 5 0 0 1 5-5h50a5 5 0 0 1 5 5v70H21V11Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h102v81H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default WomanShirt;
