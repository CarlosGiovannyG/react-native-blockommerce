import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Defs, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23.207}
      height={31.646}
      viewBox="0 0 23.207 31.646"
      {...props}
    >
      <Defs></Defs>
      <Path
        fill="#E2001A"
        className="prefix__a"
        d="M11.607 0a11.6 11.6 0 00-11.6 11.6c0 6.236 10.74 19.3 11.2 19.852a.528.528 0 00.813 0c.457-.553 11.2-13.616 11.2-19.852A11.6 11.6 0 0011.607 0zm0 30.28C9.623 27.803 1.059 16.81 1.059 11.603a10.55 10.55 0 1121.1 0c-.007 5.206-8.571 16.2-10.552 18.677z"
      />
      <Path
        fill="#E2001A"
        className="prefix__a"
        d="M18.782 9.603l-6.857-5.274a.527.527 0 00-.643 0L4.425 9.603a.527.527 0 00.322.945h1.582v5.8a.528.528 0 00.528.528h9.493a.528.528 0 00.528-.528v-5.8h1.582a.528.528 0 00.322-.945zm-6.124 6.22h-2.109v-3.165h2.109zm3.692-6.33a.528.528 0 00-.527.528v5.8h-2.11v-3.692a.527.527 0 00-.527-.528h-3.165a.527.527 0 00-.527.528v3.692h-2.11v-5.8a.528.528 0 00-.527-.528h-.56l5.306-4.081 5.304 4.081z"
      />
    </Svg>
  )
}

export default SvgComponent
