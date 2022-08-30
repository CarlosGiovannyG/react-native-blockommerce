import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { G, Path, Rect } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22.2}
      height={25.119}
      viewBox="0 0 22.2 25.119"
      {...props}
    >
      <G data-name="Grupo 2306" transform="translate(-1216.4 -946.9)">
        <Path
          data-name="Uni\xF3n 2"
          d="M1235.726 969.344l-1.678 1.576-1.613-1.576-1.678 1.576-1.677-1.576-1.58 1.575-1.742-1.575-1.71 1.575-1.774-1.575-1.742 1.575-1.484-1.575-1.548 1.575V951a3 3 0 013-3h14a3 3 0 013 3v19.92z"
          fill="none"
          stroke="#e2001a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.2}
        />
        <Rect
          data-name="Rect\xE1ngulo 1325"
          width={12.646}
          height={3}
          rx={1.5}
          transform="translate(1221 954)"
          fill="#005ca9"
        />
        <Rect
          data-name="Rect\xE1ngulo 1343"
          width={12.646}
          height={3}
          rx={1.5}
          transform="translate(1221 960)"
          fill="#005ca9"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
