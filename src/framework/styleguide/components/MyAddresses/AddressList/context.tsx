import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type StoreShelfContextValue = ShelfConfig;

const StoreShelfContext = createContext<StoreShelfContextValue | {}>({});

export interface ShelfProps {
  config: ShelfConfig;
}

export type ShelfConfig = {
  setSelectedItem: (text: string) => void;
  selectedItem: any;
  item: any;
  data: { [key: string]: any };
};
export const StoreShelfContextProvider: FC<ShelfProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      setSelectedItem: config.setSelectedItem,
      selectedItem: config.selectedItem,
      item: config.item,
      data: config.data,
    };
  }, [config]);
  return (
    <StoreShelfContext.Provider value={value}>
      {children}
    </StoreShelfContext.Provider>
  );
};

export function useStoreShelfContext() {
  return useContext(StoreShelfContext) as StoreShelfContextValue;
}
