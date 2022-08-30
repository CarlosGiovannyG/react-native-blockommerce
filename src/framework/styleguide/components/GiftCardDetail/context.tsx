import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type GiftCardDetailSummaryHandlerContextValue =
  GiftCardDetailSummaryHandlerConfig;
const GiftCardDetailSummaryHandler = createContext<
  GiftCardDetailSummaryHandlerContextValue | {}
>({});

export interface GiftCardDetailSummaryHandlerProps {
  config: GiftCardDetailSummaryHandlerConfig;
}
export type GiftCardDetailSummaryHandlerConfig = {
  list: any[];
  recordsFiltered?: number;
  getNextPage?: (...args: any) => void;
  selectedFacets?: any[];
  loading?: boolean;
};
export const GiftCardDetailSummaryHandlerProvider: FC<
  GiftCardDetailSummaryHandlerProps
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
    <GiftCardDetailSummaryHandler.Provider value={value}>
      {children}
    </GiftCardDetailSummaryHandler.Provider>
  );
};
export function useGiftCardDetailSummaryHandler() {
  return useContext(
    GiftCardDetailSummaryHandler
  ) as GiftCardDetailSummaryHandlerContextValue;
}
