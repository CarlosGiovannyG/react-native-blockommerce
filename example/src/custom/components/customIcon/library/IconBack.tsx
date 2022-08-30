import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { G, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.873}
      height={20.002}
      viewBox="0 0 18.873 20.002"
      {...props}
    >
      <G
        data-name="Grupo 2604"
        fill="none"
        stroke="#AEAEAE"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <Path data-name="L\xEDnea 136" d="M1.413 10.001l7.872 8.588" />
        <Path data-name="L\xEDnea 138" d="M1.413 10.001l7.872-8.588" />
        <Path data-name="L\xEDnea 137" d="M17.873 10.001H1.413" />
      </G>
    </Svg>
  )
}

export default SvgComponent
