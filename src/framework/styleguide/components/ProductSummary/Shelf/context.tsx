import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type ShelfContextValue = ShelfConfig;

const ShelfContext = createContext<ShelfContextValue | {}>({});

export interface ShelfProps {
  config: ShelfConfig;
}

export type ShelfConfig = {
  data: any;
};

export const ShelfContextProvider: FC<ShelfProps> = ({ config, children }) => {
  const value = useMemo(() => {
    return {
      data: config.data,
    };
  }, [config]);
  return (
    <ShelfContext.Provider value={value}>{children}</ShelfContext.Provider>
  );
};

export function useShelfContext() {
  return useContext(ShelfContext) as ShelfContextValue;
}
