import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={11.183}
      height={6.855}
      viewBox="0 0 11.183 6.855"
      {...props}
    >
      <Path
        d="M1.047 1.048l4.544 5.066 4.544-5.066"
        fill="none"
        stroke="#707070"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.483}
      />
    </Svg>
  )
}

export default SvgComponent
