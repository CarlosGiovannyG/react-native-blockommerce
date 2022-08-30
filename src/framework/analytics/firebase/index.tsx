/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import { ReactNode } from 'react';
import { localProvider } from './provider';
import {
  AnalyticsConfig,
  AnalyticsConfigProviderJSON,
  AnalyticsProvider as CoreAnalyticsProvider,
  useAnalytics as useCoreAnalytics,
} from '$core-analytics';
import AnalyticsProviderConfig from './analytics.config.json';

export const localConfig: AnalyticsConfig = {
  config: AnalyticsProviderConfig as AnalyticsConfigProviderJSON,
};

export function AnalyticsProvider({
  children,
  ...config
}: {
  children?: ReactNode;
} & Partial<AnalyticsConfig>) {
  return (
    <CoreAnalyticsProvider
      // @ts-ignore
      provider={localProvider}
      config={{ ...localConfig, ...config }}
    >
      {children}
    </CoreAnalyticsProvider>
  );
}

export const useAnalytics = () => useCoreAnalytics();
