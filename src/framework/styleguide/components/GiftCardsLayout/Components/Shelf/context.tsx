import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type GiftCardShelfContextValue = GiftCardShelfConfig;

const GiftCardShelfContext = createContext<GiftCardShelfContextValue | {}>({});

export interface GiftCardShelfProps {
  config: GiftCardShelfConfig;
}

export type GiftCardShelfConfig = {
  data: any;
};

export const GiftCardShelfContextProvider: FC<GiftCardShelfProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      data: config.data,
    };
  }, [config]);
  return (
    <GiftCardShelfContext.Provider value={value}>
      {children}
    </GiftCardShelfContext.Provider>
  );
};

export function useGiftCardShelfContext() {
  return useContext(GiftCardShelfContext) as GiftCardShelfContextValue;
}
