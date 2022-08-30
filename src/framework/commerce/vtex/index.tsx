/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import { ReactNode } from 'react';
import { localProvider } from './provider';
import {
  CommerceConfig,
  CommerceConfigProviderJSON,
  CommerceProvider as CoreCommerceProvider,
  useCommerce as useCoreCommerce,
} from '$core-commerce';
import CommerceProviderConfig from './commerce.config.json';

export const localConfig: CommerceConfig = {
  locale: 'es-CO',
  cartCookie: 'session',
  config: CommerceProviderConfig as CommerceConfigProviderJSON,
};

export function CommerceProvider({
  children,
  ...config
}: {
  children?: ReactNode;
  locale: string;
} & Partial<CommerceConfig>) {
  return (
    <CoreCommerceProvider
      // @ts-ignore
      provider={localProvider}
      config={{ ...localConfig, ...config }}
    >
      {children}
    </CoreCommerceProvider>
  );
}

export const useCommerce = () => useCoreCommerce();
