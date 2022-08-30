/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { productQuery, productsByIdentifierQuery } from '$commerce/utils/queries';
import useGetProductsByIdentifier from '$core-commerce/product/use-get-product-by-identifier';
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import { NormalizeProducts } from './use-search';

export default useGetProductsByIdentifier;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: productQuery,
  },
  async fetcher({ input, options, fetch }) {
    const data = await Promise.all(
      input?.values.map((value) =>
        fetch({
          ...options,
          variables: {
            identifier: {
              field: 'id',
              value: value,
            },
          },
        })
      )
    );
    return {
      products: NormalizeProducts(data.map(product => product?.product)),
    };
  },
  useHook:
    ({ fetch }) =>
      () => {
        return useCallback(async function getProductsByIdentifier(input) {
          const data = await fetch({ input });
          return data;
        }, []);
      },
};
