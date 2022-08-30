import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type WishlistShelfContextValue = WishlistShelfConfig;

const WishlistShelfContext = createContext<WishlistShelfContextValue | {}>({});

export interface WishlistShelfProps {
  config: WishlistShelfConfig;
}

export type WishlistShelfConfig = {
  data: any;
};

export const WishlistShelfContextProvider: FC<WishlistShelfProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      data: config.data,
    };
  }, [config]);
  return (
    <WishlistShelfContext.Provider value={value}>
      {children}
    </WishlistShelfContext.Provider>
  );
};

export function useWishlistShelfContext() {
  return useContext(WishlistShelfContext) as WishlistShelfContextValue;
}
