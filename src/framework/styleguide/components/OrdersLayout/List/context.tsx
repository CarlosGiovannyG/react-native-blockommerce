import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type OrderItemListContextValue = OrderItemListConfig;

const OrderItemListContext = createContext<OrderItemListContextValue | {}>({});

export interface OrderItemListProps {
  config: OrderItemListConfig;
}

export type OrderItemListConfig = {
  data: any;
};

export const OrderItemListContextProvider: FC<OrderItemListProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      data: config.data,
    };
  }, [config]);
  return (
    <OrderItemListContext.Provider value={value}>
      {children}
    </OrderItemListContext.Provider>
  );
};

export function useOrderItemListContext() {
  return useContext(OrderItemListContext) as OrderItemListContextValue;
}
