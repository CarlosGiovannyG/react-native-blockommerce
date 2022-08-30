import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type AccordionFilterItemContextValue = AccordionFilterItemConfig;

const AccordionFilterItemContext = createContext<
  AccordionFilterItemContextValue | {}
>({});

export interface AccordionFilterItemProps {
  config: AccordionFilterItemConfig;
}

export type AccordionFilterItemConfig = {
  data: any;
};

export const AccordionFilterItemContextProvider: FC<
  AccordionFilterItemProps
> = ({ config, children }) => {
  const value = useMemo(() => {
    return {
      data: config.data,
    };
  }, [config]);
  return (
    <AccordionFilterItemContext.Provider value={value}>
      {children}
    </AccordionFilterItemContext.Provider>
  );
};

export function useAccordionFilterItem() {
  return useContext(
    AccordionFilterItemContext
  ) as AccordionFilterItemContextValue;
}
