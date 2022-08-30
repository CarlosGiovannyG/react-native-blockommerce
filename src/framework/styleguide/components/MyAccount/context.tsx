import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type MyAccountContextValue = MyAccountConfig;

const MyAccountContext = createContext<MyAccountContextValue | {}>({});

export interface MyAccountProps {
  config: MyAccountConfig;
}

export type MyAccountConfig = {
  data: any;
  isLoading: boolean;
};

export const MyAccountContextProvider: FC<MyAccountProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      data: config.data,
      isLoading: config.isLoading,
    };
  }, [config]);
  return (
    <MyAccountContext.Provider value={value}>
      {children}
    </MyAccountContext.Provider>
  );
};

export function useMyAccount() {
  return useContext(MyAccountContext) as MyAccountContextValue;
}
