import { ThemeType } from '$styleguide/types/theme';

interface CustomTheme {
  jumbo: string;
  metro: string;
  easy: string;
}

const theme: ThemeType<CustomTheme> = {
  spacing: [0, 4, 8, 16, 32, 64],
  palette: {
    type: 'main',
    primary: {
      main: '#178BFC',
    },
    secondary: {
      light: '#0066ff',
      main: '#0569B3',
      contrastText: '#ffcc00',
    },
    tertiary: {
      light: '#0066ff',
      main: '#E2001A',
      contrastText: '#ffcc00',
    },
    statusBar: {
      main: '#000',
    },
    error: {
      light: '#0066ff',
      main: 'red',
      contrastText: '#ffcc00',
    },
    warning: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    info: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    success: {
      light: '#0066ff',
      main: 'green',
      contrastText: '#ffcc00',
    },
    gray: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      'A100': '#d5d5d5',
      'A200': '#aaaaaa',
      'A400': '#303030',
      'A700': '#616161',
    },
    textPrimary: {
      light: 'black',
      main: 'black',
      dark: 'white',
    },
    textSecondary: {
      light: 'white',
      main: 'white',
      dark: 'black',
    },
    textTertiary: {
      light: 'white',
      main: '#E2001A',
      dark: 'black',
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontStyle: 'normal',
      fontFamily: 'Montserrat-Black',
      //fontWeight: 'bold',
    },
    h2: {
      fontSize: 24,
      fontStyle: 'normal',
      fontFamily: 'Montserrat-Bold',
      //fontWeight: 'bold',
    },
    h3: {
      fontSize: 16,
      fontStyle: 'normal',
      fontFamily: 'Montserrat-Bold',
      //fontWeight: 'bold',
    },
    h4: {
      fontSize: 8,
      fontStyle: 'normal',
      fontFamily: 'Montserrat-Bold',
      //fontWeight: 'bold',
    },
    subtitle2: {
      fontSize: 22,
      fontStyle: 'normal',
      fontFamily: 'Montserrat-Bold',
      //fontWeight: 'bold',
    },
    subtitle3: {
      fontSize: 18,
      fontStyle: 'normal',
      fontFamily: 'Montserrat-SemiBold',
    },
    subtitle4: {
      fontSize: 13,
      fontStyle: 'normal',
      fontFamily: 'Montserrat-SemiBold',
    },
    body1: {
      letterSpacing: 0,
      lineHeight: 20,
      fontSize: 16,
      fontStyle: 'normal',
      fontFamily: 'Montserrat-Medium',
    },
    body2: {
      fontSize: 14,
      fontStyle: 'normal',
      fontFamily: 'Montserrat-Medium',
    },
    body3: {
      fontSize: 12,
      fontStyle: 'normal',
      fontFamily: 'Montserrat-Medium',
    },
    button: {
      fontStyle: 'normal',
      fontFamily: 'Montserrat',
      fontSize: 20,
    },
  },
};

export default theme;
