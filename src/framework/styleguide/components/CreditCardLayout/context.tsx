import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type CreditCardSummaryHandlerContextValue =
  CreditCardSummaryHandlerConfig;
const CreditCardSummaryHandler = createContext<
  CreditCardSummaryHandlerContextValue | {}
>({});

export interface CreditCardSummaryHandlerProps {
  config: CreditCardSummaryHandlerConfig;
}
export type CreditCardSummaryHandlerConfig = {
  list: any[];
};
export const CreditCardSummaryHandlerProvider: FC<
  CreditCardSummaryHandlerProps
> = ({ config, children }) => {
  const value = useMemo(() => {
    return {
      list: config.list,
    };
  }, [config]);
  return (
    <CreditCardSummaryHandler.Provider value={value}>
      {children}
    </CreditCardSummaryHandler.Provider>
  );
};
export function useCreditCardSummaryHandler() {
  return useContext(
    CreditCardSummaryHandler
  ) as CreditCardSummaryHandlerContextValue;
}
