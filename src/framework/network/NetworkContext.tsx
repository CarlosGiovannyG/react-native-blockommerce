import { API_URL, STORE_DOMAIN } from '$commerce/const';
import React, { FC, useContext, useMemo } from 'react';

interface Context {
  toggleConnection: () => void;
  pingUrl: string;
}

export interface NetworkProps {
  config: Context;
}

const NetworkContext = React.createContext<Context>({
  pingUrl: STORE_DOMAIN,
  toggleConnection: () => {},
});

export const NetworkProvider: FC<NetworkProps> = ({ config, children }) => {
  const value = useMemo(() => {
    return {
      toggleConnection: config.toggleConnection,
      pingUrl: config.pingUrl,
    };
  }, [config]);
  return (
    <NetworkContext.Provider value={value}>{children}</NetworkContext.Provider>
  );
};

export const useNetwork = () => {
  return useContext(NetworkContext);
};

export default NetworkContext;
