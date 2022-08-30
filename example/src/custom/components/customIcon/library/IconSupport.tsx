import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { G, Text, TSpan, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21.2}
      height={24.554}
      viewBox="0 0 21.2 24.554"
      {...props}
    >
      <G data-name="Grupo 2305">
        <Text
          data-name="?"
          transform="translate(10.6 15.6)"
          fill="#005ca9"
          fontSize={13}
          fontFamily="Montserrat-Bold, Montserrat"
          fontWeight={700}
        >
          <TSpan x={-3.829} y={0}>
            {'?'}
          </TSpan>
        </Text>
        <Path
          data-name="Uni\xF3n 1"
          d="M11.6 20.048a9.6 9.6 0 01-1 .052 9.5 9.5 0 01-9.5-9.5 9.5 9.5 0 019.5-9.5 9.5 9.5 0 019.5 9.5q0 .485-.048.958l.043.03c.111 7.01-8.5 11.867-8.5 11.867z"
          fill="none"
          stroke="#e2001a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.2}
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
