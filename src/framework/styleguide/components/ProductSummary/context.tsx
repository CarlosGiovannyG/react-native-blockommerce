import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type ProductSummaryHandlerContextValue = ProductSummaryHandlerConfig;
const ProductSummaryHandler = createContext<
  ProductSummaryHandlerContextValue | {}
>({});

export interface ProductSummaryHandlerProps {
  config: ProductSummaryHandlerConfig;
}
export type ProductSummaryHandlerConfig = {
  list: any[];
  recordsFiltered?: number;
  getNextPage?: (...args: any) => void;
  loadingProducts?: boolean;
  selectedFacets?: any[];
};
export const ProductSummaryHandlerProvider: FC<ProductSummaryHandlerProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      list: config.list,
      getNextPage: config.getNextPage,
      loadingProducts: config.loadingProducts,
      selectedFacets: config.selectedFacets,
      recordsFiltered: config.recordsFiltered,
    };
  }, [config]);
  return (
    <ProductSummaryHandler.Provider value={value}>
      {children}
    </ProductSummaryHandler.Provider>
  );
};
export function useProductSummaryHandler() {
  return useContext(ProductSummaryHandler) as ProductSummaryHandlerContextValue;
}
