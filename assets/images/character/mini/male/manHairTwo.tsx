import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import tw from "twrnc";

type ManHairTwoProps = {
  hairColor: string;
  style?: string;
};

const ManHairTwo = ({ hairColor, style }: ManHairTwoProps, props: SvgProps) => {
  return (
    <Svg
      width={22}
      height={15}
      fill="none"
      viewBox="0 0 85 50"
      {...props}
      style={tw`${style || ""}`}
    >
      <Path fill="url(#a)" d="M9.5 50H0V22h18.5c-8.4 0-9 9-9 28Z" />
      <Path
        fill="url(#b)"
        d="M75.23 50H85V22H65.973c8.64 0 9.257 9 9.257 28Z"
      />
      <Path
        fill={hairColor}
        d="M0 20c0-5.523 4.477-10 10-10h65c5.523 0 10 4.477 10 10v2H0v-2Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={10}
          x2={10.209}
          y1={30}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={hairColor} />
          <Stop offset={1} stopColor="#E7BC98" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={74.715}
          x2={74.512}
          y1={30}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={hairColor} />
          <Stop offset={1} stopColor="#E7BC98" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export default ManHairTwo;
