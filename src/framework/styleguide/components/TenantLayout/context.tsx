import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type TenantHandlerContextValue =
  TenantHandlerConfig;
const TenantHandler = createContext<
  TenantHandlerContextValue | {}
>({});

export interface TenantHandlerProps {
  config: TenantHandlerConfig;
}
export type TenantHandlerConfig = {
  list: any[];
};
export const TenantHandlerProvider: FC<
  TenantHandlerProps
> = ({ config, children }) => {
  const value = useMemo(() => {
    return {
      list: config.list,
    };
  }, [config]);
  return (
    <TenantHandler.Provider value={value}>
      {children}
    </TenantHandler.Provider>
  );
};
export function useTenantHandler() {
  return useContext(
    TenantHandler
  ) as TenantHandlerContextValue;
}
