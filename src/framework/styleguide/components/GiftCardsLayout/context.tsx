import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type GiftCardSummaryHandlerContextValue = GiftCardSummaryHandlerConfig;
const GiftCardSummaryHandler = createContext<
  GiftCardSummaryHandlerContextValue | {}
>({});

export interface GiftCardSummaryHandlerProps {
  config: GiftCardSummaryHandlerConfig;
}
export type GiftCardSummaryHandlerConfig = {
  list: any[];
  recordsFiltered?: number;
  getNextPage?: (...args: any) => void;
  selectedFacets?: any[];
  loading?: boolean;
};
export const GiftCardSummaryHandlerProvider: FC<
  GiftCardSummaryHandlerProps
> = ({ config, children }) => {
  const value = useMemo(() => {
    return {
      list: config.list,
      getNextPage: config.getNextPage,
      loading: config.loading,
      selectedFacets: config.selectedFacets,
      recordsFiltered: config.recordsFiltered,
    };
  }, [config]);
  return (
    <GiftCardSummaryHandler.Provider value={value}>
      {children}
    </GiftCardSummaryHandler.Provider>
  );
};
export function useGiftCardSummaryHandler() {
  return useContext(
    GiftCardSummaryHandler
  ) as GiftCardSummaryHandlerContextValue;
}
