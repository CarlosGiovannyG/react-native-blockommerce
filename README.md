# react-native-blockommerce

The first-class Framework high-performance e-commerce for Mobile

## Features

- stale-while-revalidate

  With SWR, components will get a stream of data updates constantly and automatically. And the UI will be always fast and reactive.

- Hermes

  Herme result in better startup time, lower memory usage, and smaller application size. Right now, Hermes is an optional feature of React Native, and our framework supports it.

- Internationalization

  Makes internalization in React Native straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, product price, and numbers, to pluralization.

- Android & iOS
- Styleguide, UI Components, Theming and Dark Mode Support

  Provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop mobile apps more faster.

- Integrations - Integrate seamlessly with the VTEX ecommerce platform.

- Based on the development of UI with JSON Blocks.

- Customizable

  Easily customize the app blocks with the CMS panel. Extend your UX with custom components, custom hooks, and more.

## Installation

```sh
npm install react-native-blockommerce
```

## Usage

```js
import * as React from 'react';

import { SafeAreaView } from 'react-native';
import { RNBlockommerce } from 'react-native-blockommerce';
import { blocks, interfaces, routes } from './store';
import { StoreStyles, StoreTheme } from './styles';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RNBlockommerce
        interfaces={interfaces}
        routes={routes}
        blocks={blocks}
        styleguideConfig={{ globalStyles: StoreStyles, theme: StoreTheme }}
      />
    </SafeAreaView>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
