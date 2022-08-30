import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type GiftCardDetailShelfContextValue = GiftCardDetailShelfConfig;

const GiftCardDetailShelfContext = createContext<
  GiftCardDetailShelfContextValue | {}
>({});

export interface GiftCardDetailShelfProps {
  config: GiftCardDetailShelfConfig;
}

export type GiftCardDetailShelfConfig = {
  data: any;
};

export const GiftCardDetailShelfContextProvider: FC<
  GiftCardDetailShelfProps
> = ({ config, children }) => {
  const value = useMemo(() => {
    return {
      data: config.data,
    };
  }, [config]);
  return (
    <GiftCardDetailShelfContext.Provider value={value}>
      {children}
    </GiftCardDetailShelfContext.Provider>
  );
};

export function useGiftCardDetailShelfContext() {
  return useContext(
    GiftCardDetailShelfContext
  ) as GiftCardDetailShelfContextValue;
}
