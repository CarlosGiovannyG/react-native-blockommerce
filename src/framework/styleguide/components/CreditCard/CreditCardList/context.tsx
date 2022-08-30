import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type CreditCardListContextValue = CreditCardListConfig;

const CreditCardListContext = createContext<CreditCardListContextValue | {}>(
  {}
);

export interface CreditCardListProps {
  config: CreditCardListConfig;
}

export type CreditCardListConfig = {
  data: any;
};

export const CreditCardListContextProvider: FC<CreditCardListProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      data: config.data,
    };
  }, [config]);
  return (
    <CreditCardListContext.Provider value={value}>
      {children}
    </CreditCardListContext.Provider>
  );
};

export function useCreditCardListContext() {
  return useContext(CreditCardListContext) as CreditCardListContextValue;
}
