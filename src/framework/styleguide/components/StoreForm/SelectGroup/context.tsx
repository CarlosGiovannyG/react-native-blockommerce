import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type SelectGroupContextValue = SelectGroupConfig;

const SelectGroupContext = createContext<SelectGroupContextValue | {}>({});

export interface SelectGroupProps {
  config: SelectGroupConfig;
}

export type SelectGroupConfig = {
  onSelectHandler: (selectedItem: any, index: number) => void;
  data: Record<string, any>;
  name: string;
};

export const SelectGroupContextProvider: FC<SelectGroupProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      onSelectHandler: config.onSelectHandler,
      data: config.data,
      name: config.name,
    };
  }, [config]);
  return (
    <SelectGroupContext.Provider value={value}>
      {children}
    </SelectGroupContext.Provider>
  );
};

export function useSelectGroupContext() {
  return useContext(SelectGroupContext) as SelectGroupContextValue;
}
