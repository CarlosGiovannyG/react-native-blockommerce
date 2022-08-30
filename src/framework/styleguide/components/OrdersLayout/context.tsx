import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type OrderListContextValue = OrderListData;

const OrderListContext = createContext<{}>({});

export interface OrderListProps {
  data: OrderListData;
}

export type OrderListData = {
  list: any[];
};

export const OrderListContextProvider: FC<OrderListProps> = ({
  data,
  children,
}) => {
  const value = useMemo(() => {
    return {
      list: data.list,
    };
  }, [data]);
  return (
    <OrderListContext.Provider value={value}>
      {children}
    </OrderListContext.Provider>
  );
};

export function useOrderList() {
  return useContext(OrderListContext) as OrderListData;
}
