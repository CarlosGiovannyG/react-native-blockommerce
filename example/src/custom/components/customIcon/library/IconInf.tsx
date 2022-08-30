import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { G, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      data-name="Grupo 1767"
      xmlns="http://www.w3.org/2000/svg"
      width={38.831}
      height={45.185}
      viewBox="0 0 38.831 45.185"
      {...props}
    >
      <G data-name="Grupo 1766" fill="#fd0d1f">
        <Path
          data-name="Trazado 3920"
          d="M19.415 16.13c-1.122 0-1.92.474-1.92 1.172v9.5c0 .6.8 1.2 1.92 1.2 1.072 0 1.945-.6 1.945-1.2v-9.5c.001-.698-.872-1.172-1.945-1.172z"
        />
        <Path
          data-name="Trazado 3921"
          d="M19.416 10.269a1.8 1.8 0 102.02 1.771 1.932 1.932 0 00-2.02-1.771z"
        />
        <Path
          data-name="Trazado 3922"
          d="M19.416 0a19.405 19.405 0 00-5.876 37.9l4.415 6.508a1.765 1.765 0 002.921 0l4.416-6.508A19.405 19.405 0 0019.416 0zm4.293 34.692a1.765 1.765 0 00-.985.709l-3.308 4.875-3.308-4.876a1.765 1.765 0 00-.985-.709 15.886 15.886 0 118.586 0z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
