import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type LivesProps = {
  status?: boolean;
}

const Lives = ({status}: LivesProps) => {
  return (
    <Svg width={31} height={34} fill="none">
      <Path
        fill={status ? "red": "transparent"}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M24.542 19.833c1.924-2.068 3.875-4.547 3.875-7.791 0-2.067-.749-4.049-2.081-5.51-1.332-1.461-3.14-2.282-5.023-2.282-2.274 0-3.875.708-5.813 2.833-1.938-2.125-3.54-2.833-5.812-2.833-1.885 0-3.692.82-5.024 2.282-1.332 1.461-2.08 3.443-2.08 5.51 0 3.258 1.937 5.737 3.874 7.791L15.5 29.75l9.042-9.917Z"
      />
    </Svg>
  );
};

export default Lives;
