import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={6.855}
      height={11.183}
      viewBox="0 0 6.855 11.183"
      {...props}
    >
      <Path
        d="M1.048 10.136l5.066-4.544-5.066-4.544"
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
