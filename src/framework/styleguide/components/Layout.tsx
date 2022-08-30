import React, { FC } from 'react';
import { ManagedUIContext } from './UIActionsHandler';
import { ActionSheet } from './common/ActionSheet';
import { ModalComponent } from './common/ModalComponent';
import NetworkToast from './common/NetworkToast';
import AppStatusBar from './common/AppStatusBar';

const Layout: FC = ({ children }) => {
  return (
    <ManagedUIContext>
      <AppStatusBar />
      {children}
      <ModalComponent />
      <ActionSheet />
      <NetworkToast />
    </ManagedUIContext>
  );
};

export default Layout;
