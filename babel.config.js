module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          $styleguide: './src/framework/styleguide',
          $engine: './src/framework/engine',

          '$core-commerce': './src/framework/commerce/kernel',
          $commerce: './src/framework/commerce/vtex',

          '$core-analytics': './src/framework/analytics/kernel',
          $analytics: './src/framework/analytics/firebase',

          '$core-cms': './src/framework/cms/kernel',
          $cms: './src/framework/cms/local',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
