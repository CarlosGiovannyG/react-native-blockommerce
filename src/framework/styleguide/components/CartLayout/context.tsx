import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type CartLayoutHandlerContextValue = CartLayoutHandlerConfig;
const CartLayoutHandler = createContext<CartLayoutHandlerContextValue | {}>(
  {}
);

export interface CartLayoutHandlerProps {
  config: CartLayoutHandlerConfig;
}
export type CartLayoutHandlerConfig = {
  totalPrice: number
};

export const CartLayoutHandlerProvider: FC<CartLayoutHandlerProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      totalPrice: config.totalPrice,
    };
  }, [config]);
  return (
    <CartLayoutHandler.Provider value={value}>
      {children}
    </CartLayoutHandler.Provider>
  );
};
export function useCartLayoutHandler() {
  return useContext(CartLayoutHandler) as CartLayoutHandlerContextValue;
}
