const path = require('path');
const pak = require('../package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
          '$engine': path.join(__dirname, '..', 'src', 'framework/engine'),
          '$styleguide': path.join(
            __dirname,
            '..',
            'src',
            'framework/styleguide'
          ),
          '$commerce': path.join(
            __dirname,
            '..',
            'src',
            'framework/commerce/vtex'
          ),
          '$core-commerce': path.join(
            __dirname,
            '..',
            'src',
            'framework/commerce/kernel'
          ),
          '$core-cms': path.join(
            __dirname,
            '..',
            'src',
            'framework/cms/kernel'
          ),
          '$core-analytics': path.join(
            __dirname,
            '..',
            'src',
            'framework/analytics/kernel'
          ),
          '$cms': path.join(__dirname, '..', 'src', 'framework/cms/local'),
          '$analytics': path.join(
            __dirname,
            '..',
            'src',
            'framework/analytics/firebase'
          ),
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
