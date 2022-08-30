import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { G, Ellipse, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={16}
      viewBox="0 0 15 16"
      {...props}
    >
      <G transform="translate(-.421 .324)">
        <Ellipse
          cx={7.5}
          cy={8}
          rx={7.5}
          ry={8}
          transform="translate(.421 -.324)"
          fill="#cfd8dc"
        />
        <Path
          d="M11.897 10.28L9.59 7.974l2.254-2.255-1.71-1.71L7.88 6.263 5.586 3.97 3.969 5.586 6.262 7.88l-2.254 2.255 1.71 1.71 2.255-2.254 2.307 2.306z"
          fill="#38464f"
          opacity={0.764}
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
