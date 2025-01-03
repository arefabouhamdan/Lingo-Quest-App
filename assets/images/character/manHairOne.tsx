import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

type ManHairOneProps = {
  hairColor: string;
};

const ManHairOne = ({ hairColor }: ManHairOneProps, props: SvgProps) => {
  return (
    <Svg width={85} height={60} fill="none" {...props}>
      <Path
        fill={ hairColor }
        d="M19 19.5C19 26.404 14.747 32 9.5 32S0 26.404 0 19.5 4.253 7 9.5 7 19 12.596 19 19.5Z"
      />
      <Path
        fill={ hairColor }
        d="M35 15.5c0 6.904-4.253 12.5-9.5 12.5S16 22.404 16 15.5 20.253 3 25.5 3 35 8.596 35 15.5ZM66 18.5c0 6.904 4.253 12.5 9.5 12.5S85 25.404 85 18.5 80.747 6 75.5 6 66 11.596 66 18.5Z"
      />
      <Path
        fill={ hairColor }
        d="M50 14.5c0 6.904 4.253 12.5 9.5 12.5S69 21.404 69 14.5 64.747 2 59.5 2 50 7.596 50 14.5Z"
      />
      <Path
        fill={ hairColor }
        d="M52 11c0 6.075-4.253 11-9.5 11S33 17.075 33 11s4.253-11 9.5-11S52 4.925 52 11Z"
      />
      <Path fill={ hairColor } d="M42 32H0V20.5L42 16v16Z" />
      <Path fill="url(#a)" d="M9.5 60H0V32h18.5c-8.4 0-9 9-9 28Z" />
      <Path fill={ hairColor } d="M40.5 32H85V20.5L39 16l1.5 16Z" />
      <Path
        fill="url(#b)"
        d="M75.23 60H85V32H65.973c8.64 0 9.257 9 9.257 28Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={10}
          x2={10.209}
          y1={40}
          y2={60}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={ hairColor } />
          <Stop offset={1} stopColor="#E7BC98" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={74.715}
          x2={74.512}
          y1={40}
          y2={60}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={ hairColor } />
          <Stop offset={1} stopColor="#E7BC98" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export default ManHairOne;
