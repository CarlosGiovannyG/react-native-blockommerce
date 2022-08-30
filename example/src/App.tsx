import * as React from 'react';

import { SafeAreaView } from 'react-native';
import { RNBlockommerce } from 'react-native-blockommerce';
import { CustomAddressSelectorComponent } from './custom/components/customAddressSelector';
import { CustomDrawer } from './custom/components/customDrawer';
import { CustomIconComponent } from './custom/components/customIcon';
import { CustomOrderTabBarButton } from './custom/components/customOderTabBarButton';
import { CustomOpenDrawer } from './custom/components/customOpenDrawer';
import { CustomCloseModal } from './custom/components/customCloseModal';
import { blocks, interfaces, routes } from './store';
import { StoreStyles, StoreTheme } from './styles';
import { CustomCloseActionSheet } from './custom/components/customCloseActionSheet';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RNBlockommerce
        interfaces={interfaces}
        routes={routes}
        blocks={blocks}
        styleguideConfig={{
          globalStyles: StoreStyles, theme: StoreTheme, CustomComponents: {
            ['custom.open-drawer-button']: CustomOpenDrawer,
            ['custom.drawer-button']: CustomDrawer,
            ['custom.address-selector']: CustomAddressSelectorComponent,
            ['custom.order-tab-bar-button']: CustomOrderTabBarButton,
            ['custom.icon']: CustomIconComponent,
            ['custom.close-action-sheet']: CustomCloseActionSheet,
            ['custom.close-modal']: CustomCloseModal,
          },
        }}

      />
    </SafeAreaView>
  );
}
