import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type ToogleContextValue = ToogleConfig;

const ToogleContext = createContext<ToogleContextValue | {}>({});

export interface ToogleProps {
  config: ToogleConfig;
}

export type ToogleConfig = {
  setSelectedItem: (text: string) => void;
  selectedItem: string;
  redirectTo: string;
  setRedirectTo: (text: string) => void;
};

export const ToogleContextProvider: FC<ToogleProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      setSelectedItem: config.setSelectedItem,
      selectedItem: config.selectedItem,
      setRedirectTo: config.setRedirectTo,
      redirectTo: config.redirectTo,
    };
  }, [config]);
  return (
    <ToogleContext.Provider value={value}>{children}</ToogleContext.Provider>
  );
};

export function useToogleContext() {
  return useContext(ToogleContext) as ToogleContextValue;
}
