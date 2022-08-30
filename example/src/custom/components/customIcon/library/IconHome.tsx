import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { G, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={27.357}
      height={25.177}
      viewBox="0 0 27.357 25.177"
      {...props}
    >
      <G
        data-name="Grupo 2303"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
      >
        <Path
          data-name="Trazado 122"
          d="M23.681 24.078V12.985h2.576l-11.89-11.88L1.095 12.99h3.17v11.093"
          stroke="#e2001a"
        />
        <Path
          data-name="Trazado 123"
          d="M10.143 24.078v-6.866h7.83v6.866"
          stroke="#005ca9"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
