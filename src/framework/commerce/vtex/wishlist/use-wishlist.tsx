/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { getCustomerToken } from '$commerce/utils/customer-token';
import { getWishlist } from '$commerce/utils/queries/wishlist/getWishlist';
import { GetWishlistHook } from '$core-commerce/types/wishlist';

import { SWRHook } from '$core-commerce/utils/types';
import { useWishlist } from '$core-commerce/wishlist';

export default useWishlist;

export const handler: SWRHook<GetWishlistHook> = {
  fetchOptions: {
    query: getWishlist,
  },

  async fetcher({ input, options, fetch }) {
    try {
      const userToken = await getCustomerToken();
     
      if (userToken) {
        const data = await fetch({
          ...options,
        });

        if (data?.getUserWishlists) return data?.getUserWishlists;
      }
    } catch (e) {
      console.log('Customer error:', e);
    }

    return null;
  },

  useHook:
    ({ useData }) =>
    (input = {}) => {
      return useData({
        swrOptions: {
          //revalidateOnFocus: false,
          revalidateIfStale: true,
          refreshInterval: 3000,
          ...input?.swrOptions,
        },
      });
    },
}; 
