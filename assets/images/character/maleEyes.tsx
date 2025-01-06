import * as React from "react";
import Svg, { SvgProps, Path, Rect, Circle } from "react-native-svg";
import tw from "twrnc";

type EyesProps = {
  eyeColor: string;
  style?: string;
};

const MaleEyes = ({ eyeColor, style }: EyesProps, props: SvgProps) => {
  return (
    <Svg
      width={85}
      height={33}
      fill="none"
      {...props}
      style={tw`${style || ""}`}
    >
      <Path fill="#000" d="M17 12H0v-2h17v2Z" />
      <Rect
        width={22}
        height={31}
        x={17}
        y={1}
        stroke="#000"
        strokeWidth={2}
        rx={11}
      />
      <Path fill="#000" d="M68 12h17v-2H68v2Z" />
      <Path fill="#000" d="M68 12h17v-2H68v2Z" />
      <Rect
        width={22}
        height={31}
        x={-1}
        y={1}
        stroke="#000"
        strokeWidth={2}
        rx={11}
        transform="matrix(-1 0 0 1 67 0)"
      />
      <Rect width={20} height={28.75} x={18} y={2} fill="#fff" rx={10} />
      <Rect width={7} height={15} x={29} y={9} fill={ eyeColor } rx={3} />
      <Circle cx={30.5} cy={10.5} r={2.5} fill="#fff" />
      <Rect width={20} height={28.75} x={47} y={2} fill="#fff" rx={10} />
      <Rect width={7} height={15} x={58} y={9} fill={ eyeColor } rx={3} />
      <Circle cx={59.5} cy={10.5} r={2.5} fill="#fff" />
      <Path stroke="#000" strokeWidth={2} d="M39 17c1.167-.755 4.2-1.811 7 0" />
    </Svg>
  );
};

export default MaleEyes;
