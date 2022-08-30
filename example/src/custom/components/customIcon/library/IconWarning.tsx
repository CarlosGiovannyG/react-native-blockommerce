import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Image } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style */

export default function (props: SvgProps) {
  return (
    <Svg width={60} height={60} viewBox="0 0 46.189 29.096" {...props}>
      <Image
        width={46.189}
        height={29.096}
        href={require('../../../../assets/images/warning.png')}
      />
    </Svg>
  )
}
