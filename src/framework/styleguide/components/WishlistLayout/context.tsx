import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type WishlistSummaryHandlerContextValue = WishlistSummaryHandlerConfig;
const WishlistSummaryHandler = createContext<
  WishlistSummaryHandlerContextValue | {}
>({});

export interface WishlistSummaryHandlerProps {
  config: WishlistSummaryHandlerConfig;
}
export type WishlistSummaryHandlerConfig = {
  list: any[];
  recordsFiltered?: number;
  getNextPage?: (...args: any) => void;
  selectedFacets?: any[];
  loadingProducts?: boolean;
};
export const WishlistSummaryHandlerProvider: FC<
  WishlistSummaryHandlerProps
> = ({ config, children }) => {
  const value = useMemo(() => {
    return {
      list: config.list,
      getNextPage: config.getNextPage,
      loadingProducts: config.loadingProducts,
      selectedFacets: config.selectedFacets,
      recordsFiltered: config.recordsFiltered,
    };
  }, [config]);
  return (
    <WishlistSummaryHandler.Provider value={value}>
      {children}
    </WishlistSummaryHandler.Provider>
  );
};
export function useWishlistSummaryHandler() {
  return useContext(
    WishlistSummaryHandler
  ) as WishlistSummaryHandlerContextValue;
}
