/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {
  ReactNode,
  MutableRefObject,
  createContext,
  useContext,
  useMemo,
  useRef,
} from 'react';

import type { Events } from '$core-cms/types';

import type { Fetcher, SWRHook, MutationHook } from './utils/types';

const CMS = createContext<CMSContextValue<any> | {}>({});

export type Provider = CMSConfig & {
  fetcher: Fetcher;
  events?: {
    useCMSEvent?: MutationHook<Events.EventsHook>;
  };
};

export type CMSProps<P extends Provider> = {
  children?: ReactNode;
  provider: P;
  config: CMSConfig;
};

export type CMSConfig = Omit<
  CMSContextValue<any>,
  'providerRef' | 'fetcherRef'
> & {
  config: CMSConfigProviderJSON;
};

export type CMSConfigProviderJSON = {
  provider: string;
  features: {};
};

export type CMSContextValue<P extends Provider> = {
  providerRef: MutableRefObject<P>;
  fetcherRef: MutableRefObject<Fetcher>;
};

export function CMSProvider<P extends Provider>({
  provider,
  children,
  config,
}: CMSProps<P>) {
  if (!config) {
    throw new Error('CMSProvider requires a valid config object');
  }

  const providerRef = useRef(provider);
  // TODO: Remove the fetcherRef

  const cfg = useMemo(
    () => ({
      providerRef,
      config: config.config,
    }),
    [config.config]
  );

  return <CMS.Provider value={cfg}>{children}</CMS.Provider>;
}

export function useCMS<P extends Provider>() {
  return useContext(CMS) as CMSContextValue<P>;
}
