/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type WishlistDetailContextValue = WishlistDetailData;

const WishlistDetailContext = createContext<WishlistDetailContextValue | {}>(
  {}
);

export interface WishlistDetailProps {
  data: WishlistDetailData;
}

export type WishlistDetailData = {
  Wishlist: any;
};

export const WishlistDetailContextProvider: FC<WishlistDetailProps> = ({
  data,
  children,
}) => {
  const value = useMemo(() => {
    return {
      Wishlist: data.Wishlist,
    };
  }, [data]);
  return (
    <WishlistDetailContext.Provider value={value}>
      {children}
    </WishlistDetailContext.Provider>
  );
};

export function useWishlistDetail() {
  return useContext(WishlistDetailContext) as WishlistDetailProps;
}
