import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Defs, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14.775}
      height={14.884}
      viewBox="0 0 14.775 14.884"
      {...props}
    >
      <Defs></Defs>
      <Path
        fill="#4CA5FB"
        className="prefix__a"
        d="M11.959 1.691a.865.865 0 00-1.071 1.358 5.658 5.658 0 11-7 0 .865.865 0 10-1.072-1.358 7.387 7.387 0 109.144 0z"
      />
      <Path
        fill="#4CA5FB"
        className="prefix__a"
        d="M6.234 6.919V1.153a1.153 1.153 0 112.306 0v5.766a1.153 1.153 0 01-2.306 0z"
      />
    </Svg>
  )
}

export default SvgComponent
