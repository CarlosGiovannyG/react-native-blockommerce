import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { G, Path, Circle } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={34.362}
      height={33.532}
      viewBox="0 0 34.362 33.532"
      {...props}
    >
      <G data-name="Grupo 2383" fill="none" strokeWidth={2}>
        <Path
          data-name="Trazado 3945"
          d="M1.004 1.016h2.84S6.9.644 7.694 4.929s2.9 12.5 2.9 12.5.68 2.967 4.924 2.967h9.973s3.833-.046 4.923-2.967 2.9-10.036 2.9-10.036.462-2.462-1.957-2.462h-23.1"
          stroke="#e2001a"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <G
          data-name="Elipse 81"
          transform="translate(9.004 24.532)"
          stroke="#005ca9"
        >
          <Circle cx={4.5} cy={4.5} r={4.5} stroke="none" />
          <Circle cx={4.5} cy={4.5} r={3.5} />
        </G>
        <G
          data-name="Elipse 82"
          transform="translate(23.004 24.532)"
          stroke="#005ca9"
        >
          <Circle cx={4.5} cy={4.5} r={4.5} stroke="none" />
          <Circle cx={4.5} cy={4.5} r={3.5} />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
