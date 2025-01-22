import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type ShirtProps = {
  shirtColor: string;
};

const ManShirt = ({ shirtColor }: ShirtProps, props: SvgProps) => {
  return (
    <Svg width={133} height={84} fill="none" {...props}>
      <Path
        fill={shirtColor}
        d="M133 84H0c0-36.947 29.773-66.898 66.5-66.898 36.727 0 66.5 29.951 66.5 66.898Z"
      />
      <Path fill={shirtColor} d="M45 0h42v33.198H45V0Z" />
    </Svg>
  );
};

export default ManShirt;
