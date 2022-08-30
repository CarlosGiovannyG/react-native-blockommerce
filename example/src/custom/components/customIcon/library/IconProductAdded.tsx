import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Defs, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={27.929}
      height={36.509}
      viewBox="0 0 27.929 36.509"
      {...props}
    >
      <Defs></Defs>
      <Path
        fill="#FFFFFF"
        className="prefix__a"
        d="M27.574 17.368a1.637 1.637 0 00-1.282-.627 10.993 10.993 0 01-1.3 1.631l1.287.005c.005 0 .005 0 .011.005a.017.017 0 01.005.011l-.84 3.628h-2.834l.256-1.931a10.793 10.793 0 01-1.773.895l-.136 1.036h-3.12v-.289c-.262.016-.529.027-.8.027s-.562-.011-.835-.033v.289h-3.127l-.142-1.053-1.773-.911.262 1.964h-3.18l-1-3.72 1.795.005a10.706 10.706 0 01-1.282-1.642c-.333 0-.649-.005-.955-.005l-.971-3.6a1.984 1.984 0 00-1.909-1.462H.818a.818.818 0 100 1.636h3.109a.339.339 0 01.327.251L7.98 27.311a2.555 2.555 0 00-2.466 2.6 2.565 2.565 0 002.553 2.509h1.195a2.813 2.813 0 00-.278 1.227 2.864 2.864 0 105.728 0 2.8 2.8 0 00-.278-1.227H19.6a2.863 2.863 0 105.449 1.227 2.833 2.833 0 00-.3-1.271.818.818 0 00-.262-1.593H8.073a.919.919 0 010-1.838c3.393.011 12.333.005 15.835.005a2.032 2.032 0 001.991-1.582l1.986-8.6a1.656 1.656 0 00-.311-1.4zm-5.389 15.055h.038a1.225 1.225 0 11-.038 0zm-10.326 0a1.227 1.227 0 11-1.227 1.227 1.229 1.229 0 011.227-1.227zm-1.838-5.106a.439.439 0 01-.425-.327l-.895-3.327h2.957l.485 3.655zm6.191 0H13.79l-.485-3.655h2.907zm4.058 0h-2.422v-3.655h2.9zm4.037-.316a.407.407 0 01-.393.316h-1.986l.48-3.655h2.673z"
      />
      <Path
        fill="#FFFFFF"
        className="prefix__a"
        d="M24.645 3.153a10.738 10.738 0 103.153 7.593 10.694 10.694 0 00-3.153-7.593zm-.905 14.281a9.458 9.458 0 112.776-6.688 9.419 9.419 0 01-2.776 6.688z"
      />
      <Path
        fill="#FFFFFF"
        className="prefix__a"
        d="M23.019 6.311a.781.781 0 00-1.08 0l-7.222 7.222-2.558-2.558a.775.775 0 00-1.113 1.08l.016.016 3.109 3.109a.77.77 0 001.1 0l7.773-7.773a.776.776 0 00-.025-1.096z"
      />
    </Svg>
  )
}

export default SvgComponent