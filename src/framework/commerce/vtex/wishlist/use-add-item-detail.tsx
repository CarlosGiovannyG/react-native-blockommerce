/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import useAddItemDetail, {
  UseAddItemDetail,
} from '$core-commerce/wishlist/use-add-item-detail';
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import useWishlist from './use-wishlist';
import { createUserWishlistItem } from '$commerce/utils/mutations/wishlist/addWishlistItem';

export default useAddItemDetail as UseAddItemDetail<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: createUserWishlistItem,
  },

  async fetcher({ input, options, fetch }) {
    

    const data = await fetch({
      ...options,
      variables: {
        acronym: 'WI',
        document: {
          fields: [
            {
              key: 'active',
              value: 'true',
            },
            {
              key: 'listId',
              value: input.listId,
            },
            {
              key: 'quantity',
              value: input.quantity,
            },
            {
              key: 'skuId',
              value: input.productId,
            },
          ],
        },
      },
    });
    return data;
  },
  useHook:
    ({ fetch }) =>
      () => {
        const { mutate } = useWishlist();
        return useCallback(async function addItemDetail(input) {
          const data = await fetch({
            input: {
              ...input,
            },
          });
          await mutate();
          return data;
        }, []);
      },
};
