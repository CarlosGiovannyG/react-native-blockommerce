/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import { ReactNode } from 'react';
import { localProvider } from './provider';
import {
  CMSConfig,
  CMSConfigProviderJSON,
  CMSProvider as CoreCMSProvider,
  useCMS as useCoreCMS,
} from '$core-cms';
import CMSProviderConfig from './cms.config.json';

export const localConfig: CMSConfig = {
  config: CMSProviderConfig as CMSConfigProviderJSON,
};

export function CMSProvider({
  children,
  ...config
}: {
  children?: ReactNode;
} & Partial<CMSConfig>) {
  return (
    <CoreCMSProvider
      // @ts-ignore
      provider={localProvider}
      config={{ ...localConfig, ...config }}
    >
      {children}
    </CoreCMSProvider>
  );
}

export const useCMS = () => useCoreCMS();
