import * as React from 'react'
import Svg, { Defs, Path } from 'react-native-svg'
import { Image } from 'react-native'

function SvgComponent() {
  return (
    <Image
      style={{ height: 26, width: 26 }}
      source={require('../../../../assets/images/envioExpress.png')}
    />
  )
}

export default SvgComponent
