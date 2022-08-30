import { Product } from '$core-commerce/types';
import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';
export type ProductDetailsContextValue = ProductDetailsConfig;

const ProductDetails = createContext<Partial<ProductDetailsContextValue>>({});

export interface ProductDetailsProps {
  config: ProductDetailsConfig;
}

export type ProductDetailsConfig = {
  product: Product.Product;
};

export const ProductDetailsProvider: FC<ProductDetailsProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      product: config.product,
    };
  }, [config]);
  return (
    <ProductDetails.Provider value={value}>{children}</ProductDetails.Provider>
  );
};

export const useProductDetails = (): ProductDetailsConfig => {
  return useContext(ProductDetails) as ProductDetailsContextValue;
};
