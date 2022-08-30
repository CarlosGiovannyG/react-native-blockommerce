import React, { FC } from 'react';
import Svg, {
  Defs,
  G,
  Image,
  LinearGradient,
  Path,
  Pattern,
  Rect,
  Stop,
  Use,
} from 'react-native-svg';

interface CardProps {
  front?: boolean;
  code?: string;
  width?: any;
  height?: any;
}
export const CreditCardTemplate: FC<CardProps> = ({
  code,
  width = 328,
  height = 152,
}) => {
  const creditcardVisa = (
    <Svg width={width} height={height} fill="none">
      <Rect
        y={0.918}
        width={328}
        height={150.918}
        rx={6}
        fill="url(#prefix__paint0_linear_659:17521)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_659:17521"
          x1={164}
          y1={0.918}
          x2={164}
          y2={151.836}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#939393" />
          <Stop offset={0.661} />
        </LinearGradient>
      </Defs>
      <Svg width={300} height={300} fill="none" viewBox="-270 35 328 152">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.032.8L21.09 19.004h4.704L28.738.8h-4.706zM17.142.822l-4.608 12.413-.492-1.873c-.909-2.26-3.488-5.503-6.517-7.546l4.213 15.18 4.978-.01L22.126.817l-4.984.004z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.258 2.124C9.985 1.015 9.192.685 8.208.646H.914l-.06.361c5.676 1.452 9.431 4.95 10.99 9.157l-1.586-8.04zM38.27 4.29a8.306 8.306 0 013.521.697l.425.211.637-3.945C41.92.884 40.46.489 38.638.489c-4.649 0-7.925 2.469-7.952 6.006-.03 2.615 2.335 4.075 4.12 4.945 1.834.894 2.448 1.462 2.44 2.26-.015 1.218-1.461 1.776-2.813 1.776-1.885 0-2.884-.274-4.43-.952l-.606-.292-.663 4.075c1.102.509 3.133.946 5.242.969 4.947 0 8.16-2.44 8.193-6.22.02-2.068-1.233-3.646-3.952-4.94-1.646-.846-2.653-1.407-2.643-2.26 0-.756.855-1.565 2.696-1.565zM51.294.821h3.635l3.807 18.191h-4.365s-.433-2.09-.573-2.725l-3.303-.005-2.722-.003c-.183.491-.989 2.733-.989 2.733h-4.94l6.986-16.68c.496-1.186 1.335-1.51 2.464-1.51zm-.296 6.646s-1.488 4.042-1.875 5.087h3.909l-1.09-5.255-.317-1.57c-.12.335-.278.77-.407 1.12-.133.368-.233.643-.22.618z"
          fill="#fff"
        />
      </Svg>
    </Svg>
  );

  const creditcardMasterCard = (
    <Svg width={width} height={height} fill="none">
      <Rect
        y={0.918}
        width={328}
        height={150.918}
        rx={6}
        fill="url(#prefix__paint0_linear_647:18982)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_647:18982"
          x1={163.765}
          y1={0}
          x2={163.765}
          y2={192}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3835C7" />
          <Stop offset={0.661} stopColor="#501FA0" />
        </LinearGradient>
      </Defs>
      <Svg
        width={500}
        height={500}
        data-name="Laag 1"
        viewBox="-10400 1450 20000 15560"
      >
        <Path
          d="M1960.59 1534.9v4h3.73a3.93 3.93 0 002-.51 1.78 1.78 0 00.75-1.53 1.71 1.71 0 00-.75-1.49 3.59 3.59 0 00-2-.51h-3.73zm3.77-2.83a6.92 6.92 0 014.48 1.3 4.3 4.3 0 011.57 3.54 4.06 4.06 0 01-1.26 3.11 6.14 6.14 0 01-3.58 1.49l5 5.7h-3.85l-4.6-5.66h-1.49v5.66h-3.22v-15.13h7zm-1 20.36a12 12 0 004.91-1 12.86 12.86 0 004-2.71 12.63 12.63 0 002.71-4 12.94 12.94 0 000-9.9 13.07 13.07 0 00-2.71-4 12.89 12.89 0 00-4-2.71 12.59 12.59 0 00-4.91-.94 13.12 13.12 0 00-5 .94 12.77 12.77 0 00-4.09 2.71 12.92 12.92 0 00-2.67 14 11.92 11.92 0 002.67 4 12.81 12.81 0 004.09 2.71 12.45 12.45 0 005 1m0-29a16.74 16.74 0 0111.75 4.8 16 16 0 013.54 5.19 16.09 16.09 0 010 12.65 16.88 16.88 0 01-3.54 5.19 17.85 17.85 0 01-5.27 3.5 16.33 16.33 0 01-6.48 1.3 16.6 16.6 0 01-6.56-1.3 17.08 17.08 0 01-5.31-3.5 16.88 16.88 0 01-3.49-5.36 16.09 16.09 0 010-12.65 16 16 0 013.54-5.19 15.8 15.8 0 015.31-3.5 16.6 16.6 0 016.56-1.3M432.16 1465.1c0-28.85 18.9-52.55 49.79-52.55 29.52 0 49.44 22.68 49.44 52.55s-19.92 52.55-49.44 52.55c-30.89 0-49.79-23.7-49.79-52.55m132.88 0V1383h-35.69v20c-11.32-14.78-28.49-24.05-51.84-24.05-46 0-82.1 36.08-82.1 86.19s36.08 86.19 82.1 86.19c23.34 0 40.52-9.28 51.84-24.05v19.93H565v-82.11zm1205.92 0c0-28.85 18.9-52.55 49.8-52.55 29.55 0 49.44 22.68 49.44 52.55s-19.89 52.55-49.44 52.55c-30.89 0-49.8-23.7-49.8-52.55m132.92 0v-148h-35.72v85.9c-11.32-14.78-28.49-24.05-51.84-24.05-46 0-82.1 36.08-82.1 86.19s36.08 86.19 82.1 86.19c23.35 0 40.52-9.28 51.84-24.05v19.93h35.72v-82.11zM1008 1410.86c23 0 37.77 14.42 41.54 39.81h-85.16c3.81-23.7 18.2-39.81 43.63-39.81m.71-32c-48.1 0-81.75 35-81.75 86.19 0 52.19 35 86.19 84.14 86.19 24.72 0 47.36-6.17 67.28-23l-17.49-26.45c-13.76 11-31.28 17.17-47.75 17.17-23 0-43.94-10.65-49.09-40.2h121.87c.35-4.44.71-8.92.71-13.72-.36-51.17-32-86.19-77.94-86.19m430.9 86.19c0-28.85 18.9-52.55 49.79-52.55 29.52 0 49.44 22.68 49.44 52.55s-19.92 52.55-49.44 52.55c-30.89 0-49.8-23.7-49.8-52.55m132.88 0V1383h-35.67v20c-11.36-14.78-28.49-24.05-51.84-24.05-46 0-82.1 36.08-82.1 86.19s36.08 86.19 82.1 86.19c23.35 0 40.48-9.28 51.84-24.05v19.93h35.68v-82.11zm-334.42 0c0 49.79 34.66 86.19 87.56 86.19 24.72 0 41.19-5.5 59-19.57l-17.14-28.85c-13.4 9.63-27.47 14.78-43 14.78-28.49-.35-49.44-20.95-49.44-52.55s20.95-52.19 49.44-52.55c15.49 0 29.56 5.15 43 14.78l17.14-28.85c-17.84-14.07-34.31-19.57-59-19.57-52.9 0-87.56 36.39-87.56 86.19m460.1-86.19c-20.59 0-34 9.63-43.27 24.05V1383h-35.37v164.12h35.73v-92c0-27.16 11.67-42.25 35-42.25a57.87 57.87 0 0122.32 4.13l11-33.64c-7.9-3.11-18.2-4.48-25.43-4.48m-956.64 17.17c-17.17-11.32-40.83-17.17-66.93-17.17-41.58 0-68.35 19.93-68.35 52.54 0 26.76 19.93 43.27 56.63 48.42l16.86 2.4c19.57 2.75 28.81 7.9 28.81 17.17 0 12.69-13 19.93-37.41 19.93-24.72 0-42.56-7.9-54.59-17.17L599.74 1530c19.57 14.42 44.29 21.3 71.06 21.3 47.4 0 74.87-22.32 74.87-53.57 0-28.85-21.62-43.94-57.34-49.09l-16.82-2.44c-15.45-2-27.83-5.11-27.83-16.11 0-12 11.67-19.22 31.25-19.22 20.95 0 41.23 7.9 51.17 14.07l15.45-28.85zm460.51-17.14c-20.59 0-34 9.63-43.23 24.05V1383h-35.37v164.12h35.69v-92c0-27.16 11.67-42.25 35-42.25a57.87 57.87 0 0122.32 4.13l11-33.64c-7.9-3.11-18.2-4.48-25.43-4.48M897.44 1383h-58.36v-49.79H803V1383h-33.29v32.62H803v74.87c0 38.08 14.78 60.76 57 60.76 15.49 0 33.33-4.8 44.65-12.69L894.34 1508c-10.65 6.17-22.32 9.28-31.6 9.28-17.84 0-23.66-11-23.66-27.47v-74.16h58.36zm-533.59 164.16v-103c0-38.79-24.72-64.89-64.57-65.24-20.95-.35-42.56 6.17-57.69 29.2-11.32-18.2-29.16-29.2-54.24-29.2-17.53 0-34.66 5.15-48.07 24.37V1383h-35.72v164.12h36v-91c0-28.49 15.8-43.63 40.2-43.63 23.7 0 35.69 15.45 35.69 43.27v91.34h36.08v-91c0-28.49 16.47-43.63 40.16-43.63 24.37 0 36 15.45 36 43.27v91.34z"
          fill="#231f20"
        />
        <Path
          d="M1980.94 1001.22v-24h-6.25l-7.23 16.47-7.19-16.47H1954v24h4.44v-18.08l6.76 15.6h4.6l6.76-15.64v18.12h4.4zm-39.65 0v-19.89h8v-4.05h-20.44v4.05h8v19.89h4.4z"
          fill="#f79410"
        />
        <Path d="M1270.57 1104.15H729.71v-972h540.87z" fill="#ff5f00" />
        <Path
          d="M764 618.17c0-197.17 92.32-372.81 236.08-486A615.46 615.46 0 00618.09 0C276.72 0 0 276.76 0 618.17s276.72 618.17 618.09 618.17a615.46 615.46 0 00382-132.17C856.34 991 764 815.35 764 618.17"
          fill="#eb001b"
        />
        <Path
          d="M2000.25 618.17c0 341.41-276.72 618.17-618.09 618.17a615.65 615.65 0 01-382.05-132.17c143.8-113.19 236.12-288.82 236.12-486s-92.32-372.81-236.12-486A615.65 615.65 0 011382.15 0c341.37 0 618.09 276.76 618.09 618.17"
          fill="#f79e1b"
        />
      </Svg>
    </Svg>
  );

  const creditcardAmerican = (
    <Svg width={width} height={height} fill="none">
      <Rect
        y={0.918}
        width={328}
        height={150.918}
        rx={6}
        fill="url(#prefix__paint0_linear_668:19045)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_668:19045"
          x1={164}
          y1={0.983}
          x2={164}
          y2={151.901}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5DD7F1" />
          <Stop offset={0.661} stopColor="#19788D" />
        </LinearGradient>
      </Defs>

      <Svg width={300} height={300} fill="none" viewBox="-180 -20 370 1000">
        <G fillRule="evenodd" clipRule="evenodd">
          <Path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
          <Path
            d="M8.484 177.699h-.551c0-.275-.138-.689-.138-.828 0-.137 0-.412-.414-.412h-.828v1.24h-.414v-2.896h1.242c.552 0 .965.139.965.689 0 .414-.138.553-.275.689.138.139.275.277.275.553v.551c0 .139 0 .139.138.139v.275zm-.551-2.068c0-.414-.276-.414-.414-.414h-.966v.828h.828c.276 0 .552-.139.552-.414zm2.345.551c0-1.654-1.379-3.035-3.173-3.035-1.655 0-3.035 1.381-3.035 3.035 0 1.793 1.38 3.174 3.035 3.174 1.793-.001 3.173-1.381 3.173-3.174zm-.414 0c0 1.518-1.241 2.621-2.759 2.621s-2.621-1.104-2.621-2.621c0-1.379 1.104-2.621 2.621-2.621s2.759 1.242 2.759 2.621zm169.954-55.731c0 4.139-2.621 6.068-7.312 6.068h-8.965v-4.139h8.965c.828 0 1.518-.137 1.795-.412.275-.277.551-.691.551-1.242 0-.553-.275-1.104-.551-1.379-.277-.277-.828-.414-1.656-.414-4.275-.139-9.656.137-9.656-5.932 0-2.76 1.793-5.795 6.621-5.795h9.242v4.139h-8.553c-.826 0-1.379 0-1.793.275-.414.414-.689.828-.689 1.518s.414 1.104.965 1.381c.553.137 1.105.275 1.795.275h2.482c2.621 0 4.277.551 5.381 1.518.826.965 1.378 2.208 1.378 4.139zm-19.451-4.139c-1.104-.967-2.76-1.518-5.381-1.518h-2.482c-.689 0-1.242-.139-1.793-.275-.553-.277-.965-.691-.965-1.381s.137-1.104.689-1.518c.414-.275.965-.275 1.793-.275h8.553v-4.139h-9.242c-4.967 0-6.623 3.035-6.623 5.795 0 6.068 5.381 5.793 9.658 5.932.826 0 1.379.137 1.654.414.275.275.553.826.553 1.379 0 .551-.277.965-.553 1.242-.414.275-.965.412-1.793.412h-8.967v4.139h8.967c4.689 0 7.311-1.93 7.311-6.068 0-1.931-.551-3.174-1.379-4.139zm-17.658 6.208h-10.896v-3.863h10.621v-3.861h-10.621v-3.588h10.896v-4H127.26v19.312h15.449v-4zm-20.416-14.346c-1.518-.828-3.311-.967-5.656-.967h-10.621v19.312h4.689v-7.035h4.967c1.654 0 2.621.139 3.311.828.828.965.828 2.621.828 3.863v2.344h4.551v-3.725c0-1.793-.137-2.621-.689-3.586-.414-.553-1.24-1.242-2.344-1.656 1.24-.412 3.311-2.068 3.311-5.104-.001-2.206-.829-3.448-2.347-4.274zm-26.21-.967H81.322l-5.932 6.346-5.656-6.346H51.111v19.312h18.348l5.932-6.346 5.656 6.346h8.967v-6.482h5.794c4 0 8.002-1.104 8.002-6.484-.001-5.242-4.14-6.346-7.727-6.346zm22.485 8.002c-.689.275-1.379.275-2.207.275l-5.656.139v-4.416h5.656c.828 0 1.656 0 2.207.414.553.277.965.828.965 1.656s-.412 1.518-.965 1.932zm-22.485.965h-6.07v-4.967h6.07c1.656 0 2.759.691 2.759 2.346 0 1.656-1.104 2.621-2.759 2.621zm-17.796.689l7.173-7.586v15.588l-7.173-8.002zm-11.174 5.657h-11.45v-3.863h10.208v-3.861H55.663v-3.588h11.588l5.104 5.656-5.242 5.656zm99.875-29.246h-6.621l-8.691-14.485v14.485h-9.379l-1.795-4.277h-9.656l-1.793 4.277h-5.381c-2.207 0-5.104-.552-6.758-2.208-1.518-1.655-2.346-3.862-2.346-7.311 0-2.897.414-5.518 2.482-7.587 1.379-1.518 3.863-2.207 7.035-2.207h4.414V78.1h-4.414c-1.654 0-2.621.276-3.586 1.104-.828.828-1.242 2.345-1.242 4.414s.414 3.587 1.242 4.553c.689.689 1.932.965 3.172.965h2.07l6.621-15.174h6.898l7.725 18.209v-18.21h7.174l8.139 13.381V73.961h4.689v19.313h.001zm-54.765-19.313h-4.689v19.313h4.689V73.961zm-9.795.828c-1.518-.828-3.172-.828-5.517-.828H86.288v19.313h4.552v-7.036h4.966c1.656 0 2.76.138 3.449.828.828.966.689 2.622.689 3.725v2.483h4.689v-3.863c0-1.655-.137-2.483-.826-3.449-.414-.552-1.242-1.242-2.207-1.655 1.24-.552 3.311-2.069 3.311-5.104.001-2.207-.966-3.449-2.483-4.414zM82.977 89.274h-10.76v-3.863h10.622v-4H72.217v-3.449h10.76v-4h-15.45v19.313h15.45v-4.001zM64.078 73.961h-7.587l-5.656 13.105-6.07-13.105h-7.449V92.17l-7.863-18.209h-6.897l-8.277 19.313h4.966l1.793-4.277h9.656l1.793 4.277h9.381V78.1l6.759 15.174h4l6.76-15.174v15.174h4.69V73.961h.001zm74.77 10.898l-3.174-7.587-3.172 7.587h6.346zm-40.006-3.034c-.689.414-1.379.414-2.345.414H90.84v-4.276h5.656c.828 0 1.792 0 2.345.276.551.414.828.966.828 1.793s-.276 1.516-.827 1.793zm-76.149 3.034l3.173-7.587 3.173 7.587h-6.346zm156.022-71.458H14.14v69.527l5.656-12.829h12.001l1.656 3.173v-3.173h14.071l3.173 6.897 3.035-6.897h44.834c2.068 0 3.861.414 5.242 1.517v-1.517h12.277v1.517c2.068-1.104 4.689-1.517 7.725-1.517h17.795l1.656 3.173v-3.173h13.105l1.932 3.173v-3.173h12.828v27.038H158.16l-2.482-4.138v4.138h-16.141l-1.793-4.414h-4.002l-1.793 4.414h-8.414c-3.311 0-5.795-.828-7.449-1.655v1.655H96.083v-6.208c0-.828-.138-.966-.69-.966h-.689v7.173H56.077v-3.449l-1.379 3.449h-8.139l-1.379-3.311v3.311H29.591l-1.655-4.414h-4.001l-1.793 4.414H14.14v81.529h164.575V129.14c-1.793.828-4.277 1.242-6.76 1.242h-12.002v-1.656c-1.379 1.105-3.863 1.656-6.207 1.656h-37.799v-6.207c0-.828-.137-.828-.828-.828h-.689v7.035h-12.416v-7.311c-2.068.965-4.414.965-6.483.965h-1.38v6.346H78.977l-3.586-4.139-4 4.139H46.972v-27.037h24.831l3.587 4.137 3.863-4.137h16.692c1.93 0 5.104.275 6.483 1.654v-1.654h14.898c1.518 0 4.416.275 6.346 1.654v-1.654h22.486V105c1.242-1.104 3.588-1.654 5.656-1.654h12.553V105c1.381-.965 3.311-1.654 5.795-1.654h8.553V13.401z"
            fill="#0077a6"
          />
        </G>
      </Svg>
    </Svg>
  );

  const creditcarddefault = (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M0 6a6 6 0 016-6h316.049c3.295 0 5.973 2.668 5.999 5.962.542 69.328.382 110.738-.014 180.061-.019 3.301-2.699 5.977-6 5.977H6a6 6 0 01-6-6V6z"
        fill="url(#prefix__paint0_linear_659:17955)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_659:17955"
          x1={164}
          y1={0}
          x2={164}
          y2={192}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#979797" />
          <Stop offset={0} stopColor="#E2E2E2" />
          <Stop offset={1} stopColor="#E2E2E2" />
        </LinearGradient>
      </Defs>
    </Svg>
  );

  const codeValidator = validatorNumberCard(code);

  switch (codeValidator) {
    case 'visa':
      return creditcardVisa;

    case 'masterCard':
      return creditcardMasterCard;

    case 'american':
      return creditcardAmerican;
    default:
      return creditcarddefault;
  }
};

export function validatorNumberCard(code = 'default'): string {
  if (code.startsWith('4')) {
    return 'visa';
  } else if (code.startsWith('5')) {
    return 'masterCard';
  } else if (code.startsWith('3')) {
    return 'american';
  } else {
    return 'default';
  }
}