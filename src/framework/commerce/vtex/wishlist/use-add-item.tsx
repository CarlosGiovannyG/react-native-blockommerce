/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCheckout } from '$commerce/checkout';
import { useCustomer } from '$commerce/customer';
import { createUserWishlist } from '$commerce/utils/mutations/wishlist/addWishlist';
import useAddItem, { UseAddItem } from '$core-commerce/wishlist/use-add-item';
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import useWishlist from './use-wishlist';

export default useAddItem as UseAddItem<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: createUserWishlist,
  },

  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        acronym: 'WL', 
        document: {
          document:  {
            active: "true",
            isPublic:"true",
            name: input.name,
            owner: input.email,
          }
        },
      },
    });
    return data;
  },

  useHook:
    ({ fetch }) =>
    () => {
      const { data: customer } = useCustomer();

      const { mutate } = useWishlist();
      return useCallback(
        async function addItem(input) {
          const data = await fetch({
            input: {
              ...input,
              email: customer.email,
            },
          });

          await mutate();

          return data;
        },
        [fetch, mutate]
      );
    },
};
