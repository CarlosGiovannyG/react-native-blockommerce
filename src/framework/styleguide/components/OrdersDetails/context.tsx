/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type OrderDetailContextValue = OrderDetailData;

const OrderDetailContext = createContext<OrderDetailContextValue | {}>({});

export interface OrderDetailProps {
  data: OrderDetailData;
}

export type OrderDetailData = {
  order: any;
};

export const OrderDetailContextProvider: FC<OrderDetailProps> = ({
  data,
  children,
}) => {
  const value = useMemo(() => {
    return {
      order: data.order,
    };
  }, [data]);
  return (
    <OrderDetailContext.Provider value={value}>
      {children}
    </OrderDetailContext.Provider>
  );
};

export function useOrderDetail() {
  return useContext(OrderDetailContext) as OrderDetailData;
}
