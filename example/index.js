import { LogBox } from 'react-native';
import { Platform } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

if (Platform.OS === 'ios') {
  import('@formatjs/intl-getcanonicallocales/polyfill');
  import('@formatjs/intl-locale/polyfill');
  import('@formatjs/intl-pluralrules/polyfill');
  import('@formatjs/intl-pluralrules/locale-data/en');
  import('@formatjs/intl-pluralrules/locale-data/es');
  import('@formatjs/intl-numberformat/polyfill');
  import('@formatjs/intl-numberformat/locale-data/en');
  import('@formatjs/intl-numberformat/locale-data/es-CO');
  import('@formatjs/intl-datetimeformat/polyfill');
  import('@formatjs/intl-datetimeformat/locale-data/en');
  import('@formatjs/intl-datetimeformat/locale-data/es-CO');
  import('@formatjs/intl-datetimeformat/add-all-tz');
}

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
