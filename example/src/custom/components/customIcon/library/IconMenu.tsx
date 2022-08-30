import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { G, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={27}
      height={17.999}
      viewBox="0 0 27 17.999"
      {...props}
    >
      <G data-name="Grupo 2605">
        <Path
          data-name="Trazado 88"
          d="M1.502 17.999h24a1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5h-24a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5zm0-7.5h24a1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5h-24a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5zm-1.5-9a1.5 1.5 0 001.5 1.5h24a1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5h-24A1.5 1.5 0 00.002 1.5z"
          fill="#e2001a"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
