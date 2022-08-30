import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Defs, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={29.559}
      height={29.559}
      viewBox="0 0 29.559 29.559"
      {...props}
    >
      <Defs></Defs>
      <Path
        fill="#FFFFFF"
        className="prefix__a"
        d="M28.328 13.548A1.232 1.232 0 0027.1 14.78a12.317 12.317 0 11-3.581-8.68 1.232 1.232 0 101.748-1.736 14.78 14.78 0 104.292 10.416 1.232 1.232 0 00-1.231-1.232z"
      />
      <Path
        fill="#FFFFFF"
        className="prefix__a"
        d="M16.521 14.779l2.824-2.824a1.232 1.232 0 00-1.742-1.742l-2.824 2.824-2.824-2.824a1.232 1.232 0 00-1.742 1.742l2.824 2.824-2.824 2.824a1.232 1.232 0 101.742 1.742l2.824-2.824 2.824 2.824a1.232 1.232 0 001.742-1.742z"
      />
    </Svg>
  )
}

export default SvgComponent
