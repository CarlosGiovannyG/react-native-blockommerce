/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import useWishlist from './use-wishlist';
import useUpdateItemDetail, {
  UseUpdateItemDetail,
} from '$core-commerce/wishlist/use-update-item-wishlist-detail';
import { updateUserWishlistItem } from '$commerce/utils/mutations/wishlist/updateWishlistItem';

export default useUpdateItemDetail as UseUpdateItemDetail<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: updateUserWishlistItem,
  },

  async fetcher({ input, options, fetch }) {
    console.log(input);

    const data = await fetch({
      ...options,
      variables: {
        acronym: 'WI',
        document: {
          fields: [
            {
              key: 'id',
              value: input.id,
            },
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
        return useCallback(async function updateItemDetail(input) {
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
