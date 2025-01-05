import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const ManHairThree = (props: SvgProps) => (
  <Svg width={106} height={79} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M18.25 79H9.747V44.969h16.558c-7.518 0-8.055 10.939-8.055 34.031Z"
    />
    <Path
      fill="url(#b)"
      d="M86.531 79h8.503V44.969H78.476c7.519 0 8.055 10.939 8.055 34.031Z"
    />
    <Path
      fill="#F6CA45"
      d="M9.747 42.538c0-16.78 13.637-30.384 30.46-30.384h24.368c16.822 0 30.46 13.604 30.46 30.384v2.431H9.746v-2.43Z"
    />
    <Path
      fill="#F6CA45"
      d="M60.92 35.363c-4.621.148-11.82 5.063-.73 21.76-18.095-4.974-21.646-17.467-21.16-23.092l21.89 1.332ZM80.414 21.76c-4.621-.148-11.82-5.062-.73-21.76-18.095 4.974-21.646 17.467-21.16 23.092l21.89-1.332Z"
    />
    <Path
      fill="#F6CA45"
      d="M70.667 35.012c-2.824.11-7.224 3.73-.446 16.034-11.058-3.665-13.228-12.87-12.931-17.015l13.377.981Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={18.698}
        x2={19.043}
        y1={54.692}
        y2={78.998}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F6CA45" />
        <Stop offset={1} stopColor="#E7BC98" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={86.084}
        x2={85.738}
        y1={54.692}
        y2={78.998}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F6CA45" />
        <Stop offset={1} stopColor="#E7BC98" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ManHairThree;
