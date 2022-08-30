import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type AccordionFilterContainerContextValue =
  AccordionFilterContainerConfig;

const AccordionFilterContainerContext = createContext<
  AccordionFilterContainerContextValue | {}
>({});

export interface AccordionFilterContainerProps {
  config: AccordionFilterContainerConfig;
}

export type AccordionFilterContainerConfig = {
  data: unknown;
  loadMore(): unknown;
  disableShowMore: boolean
};

export const AccordionFilterContainerContextProvider: FC<
  AccordionFilterContainerProps
> = ({ config, children }) => {
  const value = useMemo(() => {
    return {
      data: config?.data,
      loadMore: config?.loadMore,
      disableShowMore: config?.disableShowMore
    };
  }, [config]);
  return (
    <AccordionFilterContainerContext.Provider value={value}>
      {children}
    </AccordionFilterContainerContext.Provider>
  );
};

export function useAccordionFilterContainer() {
  return useContext(
    AccordionFilterContainerContext
  ) as AccordionFilterContainerContextValue;
}
