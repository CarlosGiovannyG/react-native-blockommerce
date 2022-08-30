import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Defs, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={31.201}
      height={31.2}
      viewBox="0 0 31.201 31.2"
      {...props}
    >
      <Defs></Defs>
      <Path
        fill="#E2001A"
        className="prefix__a"
        d="M30.739 13.129l-2.533-.631a12.821 12.821 0 00-1.5-3.617l1.345-2.237a.61.61 0 00-.092-.745L25.3 3.24a.608.608 0 00-.745-.091l-2.236 1.344a12.862 12.862 0 00-3.617-1.5L18.071.461a.609.609 0 00-.591-.462h-3.761a.609.609 0 00-.591.462l-.631 2.532a12.862 12.862 0 00-3.617 1.5L6.644 3.149a.61.61 0 00-.745.091L3.24 5.899a.61.61 0 00-.092.745l1.345 2.237a12.821 12.821 0 00-1.5 3.617l-2.533.631a.609.609 0 00-.462.591v3.76a.609.609 0 00.462.591l2.533.631a12.851 12.851 0 001.5 3.617l-1.345 2.237a.61.61 0 00.092.745l2.659 2.659a.61.61 0 00.745.091l2.236-1.344a12.875 12.875 0 003.617 1.5l.631 2.532a.609.609 0 00.591.462h3.761a.609.609 0 00.591-.462l.631-2.532a12.863 12.863 0 003.617-1.5l2.236 1.344a.61.61 0 00.745-.091l2.66-2.659a.61.61 0 00.091-.745l-1.344-2.237a12.85 12.85 0 001.5-3.617l2.532-.631a.609.609 0 00.462-.591v-3.76a.609.609 0 00-.462-.591zm-.757 3.875l-2.433.606a.609.609 0 00-.449.464 11.659 11.659 0 01-1.619 3.908.608.608 0 00-.011.645l1.292 2.148-1.986 1.986-2.149-1.291a.61.61 0 00-.645.01 11.652 11.652 0 01-3.908 1.62.607.607 0 00-.463.448l-.606 2.433h-2.808l-.607-2.433a.607.607 0 00-.463-.448 11.652 11.652 0 01-3.908-1.62.61.61 0 00-.645-.01l-2.149 1.291-1.986-1.985 1.292-2.149a.608.608 0 00-.011-.645 11.659 11.659 0 01-1.619-3.908.609.609 0 00-.449-.464l-2.433-.606v-2.808l2.433-.606a.609.609 0 00.449-.464A11.659 11.659 0 015.72 9.218a.608.608 0 00.011-.645L4.439 6.425l1.986-1.986L8.574 5.73a.61.61 0 00.645-.01 11.653 11.653 0 013.908-1.62.607.607 0 00.463-.448l.607-2.433h2.808l.606 2.433a.607.607 0 00.463.448 11.674 11.674 0 013.908 1.62.61.61 0 00.645.01l2.149-1.291 1.986 1.986-1.292 2.148a.608.608 0 00.011.645 11.659 11.659 0 011.619 3.908.609.609 0 00.449.464l2.433.606z"
      />
      <Path
        fill="#E2001A"
        className="prefix__a"
        d="M15.601 6.459a9.05 9.05 0 00-4.049.944.61.61 0 10.541 1.092 7.838 7.838 0 013.508-.817 7.916 7.916 0 11-6.824 3.894.61.61 0 00-1.049-.62 9.142 9.142 0 107.873-4.493z"
      />
      <Path
        fill="#E2001A"
        className="prefix__a"
        d="M15.601 11.212a4.388 4.388 0 104.387 4.388 4.393 4.393 0 00-4.387-4.388zm0 7.557a3.169 3.169 0 113.168-3.169 3.172 3.172 0 01-3.168 3.169zM10.217 8.927a.607.607 0 10.179.43.61.61 0 00-.179-.43z"
      />
    </Svg>
  )
}

export default SvgComponent
