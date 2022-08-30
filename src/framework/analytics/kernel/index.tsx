/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {
  ReactNode,
  MutableRefObject,
  createContext,
  useContext,
  useMemo,
  useRef,
} from 'react';

import type { Events } from '$core-analytics/types';

import type { Fetcher, SWRHook, MutationHook } from './utils/types';

const Analytics = createContext<AnalyticsContextValue<any> | {}>({});

export type Provider = AnalyticsConfig & {
  fetcher: Fetcher;
  events?: {
    useAnalyticEvent?: MutationHook<Events.EventsHook>;
  };
};

export type AnalyticsProps<P extends Provider> = {
  children?: ReactNode;
  provider: P;
  config: AnalyticsConfig;
};

export type AnalyticsConfig = Omit<
  AnalyticsContextValue<any>,
  'providerRef' | 'fetcherRef'
> & {
  config: AnalyticsConfigProviderJSON;
};

export type AnalyticsConfigProviderJSON = {
  provider: string;
  features: {};
};

export type AnalyticsContextValue<P extends Provider> = {
  providerRef: MutableRefObject<P>;
  fetcherRef: MutableRefObject<Fetcher>;
};

export function AnalyticsProvider<P extends Provider>({
  provider,
  children,
  config,
}: AnalyticsProps<P>) {
  if (!config) {
    throw new Error('AnalyticsProvider requires a valid config object');
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

  return <Analytics.Provider value={cfg}>{children}</Analytics.Provider>;
}

export function useAnalytics<P extends Provider>() {
  return useContext(Analytics) as AnalyticsContextValue<P>;
}
