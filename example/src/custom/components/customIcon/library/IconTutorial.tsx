import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Defs, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30.296}
      height={36.342}
      viewBox="0 0 30.296 36.342"
      {...props}
    >
      <Defs></Defs>
      <Path
        fill="#E2001A"
        className="prefix__a"
        d="M15.176 7.833A9.36 9.36 0 008.99 24.205c1.479 1.48 1.345 4.64 1.311 4.673a.558.558 0 00.168.437.62.62 0 00.4.168h8.572a.558.558 0 00.4-.168.639.639 0 00.168-.437c0-.033-.168-3.193 1.311-4.673l.1-.1a9.332 9.332 0 00-6.253-16.272zm5.379 15.5c-.034.034-.1.1-.1.135a7.845 7.845 0 00-1.58 4.841h-7.43c-.033-1.11-.269-3.53-1.681-4.976a8.186 8.186 0 1110.792 0z"
      />
      <Path
        fill="#E2001A"
        className="prefix__a"
        d="M15.142 10.22a.572.572 0 000 1.143 6.12 6.12 0 016.119 6.119.572.572 0 001.143 0 7.232 7.232 0 00-7.262-7.262zM18.874 30.122h-7.463a1.412 1.412 0 100 2.824h7.429a1.451 1.451 0 001.446-1.412 1.421 1.421 0 00-1.412-1.412zm0 1.647h-7.463a.264.264 0 01-.269-.268.247.247 0 01.269-.269h7.429a.264.264 0 01.269.269.239.239 0 01-.235.268zM17.764 33.513H12.52a1.412 1.412 0 000 2.824h5.244a1.42 1.42 0 001.412-1.412 1.4 1.4 0 00-1.412-1.412zm0 1.647H12.52a.265.265 0 01-.269-.269.248.248 0 01.269-.269h5.244a.269.269 0 010 .538zM15.142 5.043a.567.567 0 00.572-.572v-3.9a.572.572 0 10-1.143 0v3.9a.589.589 0 00.571.572zM24.656 2.891a.543.543 0 00-.773.135l-2.15 3.227a.555.555 0 00.135.807.545.545 0 00.3.1.537.537 0 00.471-.269l2.152-3.227a.523.523 0 00-.135-.773zM8.318 7.026a.541.541 0 00.3-.1.589.589 0 00.168-.807L6.702 2.858a.583.583 0 00-.975.639l2.084 3.261a.56.56 0 00.507.268zM4.25 10.59L.85 8.741a.592.592 0 00-.773.235.538.538 0 00.236.774l3.4 1.849a.806.806 0 00.269.067.554.554 0 00.5-.3.591.591 0 00-.232-.776zM30.233 8.976a.592.592 0 00-.773-.235l-3.43 1.849a.593.593 0 00-.235.773.555.555 0 00.5.3.641.641 0 00.269-.067l3.429-1.849a.594.594 0 00.24-.771z"
      />
    </Svg>
  )
}

export default SvgComponent
