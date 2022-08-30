/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useRemoveItemDetail, {
  UseRemoveItemDetail,
} from '$core-commerce/wishlist/use-remove-item-detail';
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import { removeUserWishlistItem } from '$commerce/utils/mutations/wishlist/removeWishlistItem';
import useWishlist from './use-wishlist';

export default useRemoveItemDetail as UseRemoveItemDetail<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: removeUserWishlistItem,
  },

  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        data: {
          id: input.id,
        },
      },
    });
    return data;
  },
  useHook:
    ({ fetch }) =>
    () => {
      const { mutate } = useWishlist();
      return useCallback(async function removeItemDetail(input) {
        const data = await fetch({
          input: {
            ...input,
          },
        });
        await mutate()
        return data;
      }, []);
    },
};
