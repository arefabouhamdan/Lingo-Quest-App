import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import tw from "twrnc";

type ManFaceProps = {
  skinColor: string;
  style: string;
};

const MaleFace = ({ skinColor, style }: ManFaceProps, props: SvgProps) => {
  return (
    <Svg width={99} height={85} fill="none"  {...props} style={tw`${style || ''}`}>
      <Path
        fill={ skinColor }
        d="M7 20C7 8.954 15.954 0 27 0h45c11.046 0 20 8.954 20 20v45c0 11.046-8.954 20-20 20H27C15.954 85 7 76.046 7 65V20Z"
      />
      <Path
        fill="#C3946D"
        d="M54 60.6c0-2.746-3.116-5.606-4.162-6.49a.571.571 0 0 0-.676 0C48.116 54.994 45 57.854 45 60.6c0 1.167.474 2.286 1.318 3.111A4.553 4.553 0 0 0 49.5 65a4.553 4.553 0 0 0 3.182-1.289A4.351 4.351 0 0 0 54 60.6Z"
      />
      <Path
        fill={ skinColor }
        d="M14 47c0 4.418-3.134 8-7 8s-7-3.582-7-8 3.134-8 7-8 7 3.582 7 8ZM99 47c0 4.418-3.134 8-7 8s-7-3.582-7-8 3.134-8 7-8 7 3.582 7 8Z"
      />
      <Path
        fill="#C3946D"
        d="M7 52c-2.21 0-4-2.239-4-5s1.79-5 4-5v10ZM92 52c2.21 0 4-2.239 4-5s-1.79-5-4-5v10Z"
      />
      <Path
        stroke="#C3946D"
        strokeLinecap="round"
        strokeWidth={4}
        d="M35 66c1.167 2.833 5.6 8.1 14 6.5"
      />
      <Path
        fill={ skinColor }
        d="M7 20C7 8.954 15.954 0 27 0h45c11.046 0 20 8.954 20 20v45c0 11.046-8.954 20-20 20H27C15.954 85 7 76.046 7 65V20Z"
      />
      <Path
        fill="#C3946D"
        d="M54 60.6c0-2.746-3.116-5.606-4.162-6.49a.571.571 0 0 0-.676 0C48.116 54.994 45 57.854 45 60.6c0 1.167.474 2.286 1.318 3.111A4.553 4.553 0 0 0 49.5 65a4.553 4.553 0 0 0 3.182-1.289A4.351 4.351 0 0 0 54 60.6Z"
      />
      <Path
        fill={ skinColor }
        d="M14 47c0 4.418-3.134 8-7 8s-7-3.582-7-8 3.134-8 7-8 7 3.582 7 8ZM99 47c0 4.418-3.134 8-7 8s-7-3.582-7-8 3.134-8 7-8 7 3.582 7 8Z"
      />
      <Path
        fill="#C3946D"
        d="M7 52c-2.21 0-4-2.239-4-5s1.79-5 4-5v10ZM92 52c2.21 0 4-2.239 4-5s-1.79-5-4-5v10Z"
      />
      <Path
        stroke="#C3946D"
        strokeLinecap="round"
        strokeWidth={4}
        d="M35 66c1.167 2.833 5.6 8.1 14 6.5"
      />
    </Svg>
  );
};
export default MaleFace;
