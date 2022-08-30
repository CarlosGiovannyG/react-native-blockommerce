import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type StoreLocatorHandlerContextValue = StoreLocatorHandlerConfig;
const StoreLocatorHandler = createContext<StoreLocatorHandlerContextValue | {}>(
  {}
);

export interface StoreLocatorHandlerProps {
  config: StoreLocatorHandlerConfig;
}
export type StoreLocatorHandlerConfig = {
  list: any[];
  getNextPage: (...args: any) => void;
  loadingProducts: boolean;
};

export const StoreLocatorHandlerProvider: FC<StoreLocatorHandlerProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      list: config.list,
      getNextPage: config.getNextPage,
      loadingProducts: config.loadingProducts,
    };
  }, [config]);
  return (
    <StoreLocatorHandler.Provider value={value}>
      {children}
    </StoreLocatorHandler.Provider>
  );
};
export function useStoreLocatorHandler() {
  return useContext(StoreLocatorHandler) as StoreLocatorHandlerContextValue;
}
