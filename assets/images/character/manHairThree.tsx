import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import tw from "twrnc";

type hairProps = {
  hairColor: string;
  style?: string;
};

const ManHairThree = ({ hairColor, style }: hairProps, props: SvgProps) => {
  return (
    <Svg width={85} height={60} fill="none" {...props} style={tw`${style || ''}`}>
      <Path fill="url(#a)" d="M6.979 65H0V37h13.59C7.42 37 6.98 46 6.98 65Z" />
      <Path
        fill="url(#b)"
        d="M78.021 65H85V37H71.41c6.17 0 6.611 9 6.611 28Z"
      />
      <Path
        fill={ hairColor }
        d="M0 35c0-13.807 11.193-25 25-25h35c13.807 0 25 11.193 25 25v2H0v-2Z"
      />
      <Path
        fill={ hairColor }
        d="M50 29.096c-3.793.122-9.701 4.165-.599 17.904-14.851-4.092-17.766-14.372-17.367-19L50 29.096ZM66 17.904c-3.793-.122-9.701-4.165-.599-17.904C50.55 4.092 47.635 14.372 48.034 19L66 17.904Z"
      />
      <Path
        fill={ hairColor }
        d="M58 28.808c-2.318.09-5.929 3.069-.366 13.192-9.076-3.015-10.857-10.59-10.613-14L58 28.808Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={7.346}
          x2={7.631}
          y1={45}
          y2={64.998}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={ hairColor } />
          <Stop offset={1} stopColor="#E7BC98" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={77.654}
          x2={77.369}
          y1={45}
          y2={64.998}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={ hairColor } />
          <Stop offset={1} stopColor="#E7BC98" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export default ManHairThree;
