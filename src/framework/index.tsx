import React from 'react';
import { FC } from 'react';
import Engine from '$engine';
import { DeepPartial, File, Interface, Route } from '$engine/typings';
import { StyleguideConfig, StyleguideProvider } from '$styleguide/styleContext';
import { CommerceProvider } from '$commerce';
import { SessionManagerProvider } from '$core-commerce/session/use-session';
import { SWRConfig } from 'swr';
import { AppState } from 'react-native';
import { NetworkProvider } from 'react-native-offline';
import { useNetwork } from './network/NetworkContext';
import IntlHandler from './I18n/IntlHandlerProvider';
import { AnalyticsProvider } from '$analytics';
import { CMSProvider } from '$cms';
export interface FrameworkProps {
  interfaces: Record<string, Interface>;
  routes: Route;
  blocks: Record<string, DeepPartial<File>>;
  intlMessages?: Record<string, Record<string, string>>;
  engineIsLoading?: boolean;
}

const Framework: FC<
  FrameworkProps & {
    styleguideConfig: Omit<StyleguideConfig, 'setTheme' | 'currentTheme'>;
  }
> = (props) => {
  const { pingUrl } = useNetwork();
  return (
    <NetworkProvider pingInterval={15000} pingServerUrl={pingUrl}>
      <SWRConfig
        value={{
          provider: () => new Map(),
          isVisible: () => {
            return true;
          },
          initFocus(callback) {
            let appState = AppState.currentState;

            const onAppStateChange = (nextAppState: string) => {
              /* If it's resuming from background or inactive mode to active one */
              if (
                /inactive|background/.exec(appState) &&
                nextAppState === 'active'
              ) {
                callback();
              }

              // @ts-ignore
              appState = nextAppState;
            };

            // Subscribe to the app state change events
            const subscription = AppState.addEventListener(
              'change',
              onAppStateChange
            );

            return () => {
              // @ts-ignore
              subscription.remove();
            };
          },
        }}
      >
        <IntlHandler messages={props.intlMessages || {}}>
          <CMSProvider>
            <AnalyticsProvider>
              <CommerceProvider locale="es-CO">
                <StyleguideProvider config={props.styleguideConfig}>
                  <SessionManagerProvider>
                    <Engine
                      interfaces={props.interfaces}
                      routes={props.routes}
                      blocks={props.blocks}
                    />
                  </SessionManagerProvider>
                </StyleguideProvider>
              </CommerceProvider>
            </AnalyticsProvider>
          </CMSProvider>
        </IntlHandler>
      </SWRConfig>
    </NetworkProvider>
  );
};

export default Framework;
