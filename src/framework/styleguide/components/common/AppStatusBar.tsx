import { useTheme } from '$styleguide/theme';
import React from 'react';
import { StatusBar } from 'react-native';

const AppStatusBar = () => {
  const {
    theme: { palette },
  } = useTheme();
  return (
    <StatusBar
      animated={true}
      backgroundColor={palette.statusBar[palette.type]}
    />
  );
};

export default AppStatusBar;
//palette.secondary[palette.type]
