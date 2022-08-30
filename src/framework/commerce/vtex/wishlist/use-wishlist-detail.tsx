/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getWishlistDetail } from '$commerce/utils/queries/wishlist/getWishlistDetail';
import { GetWishlistDetailHook } from '$core-commerce/types/wishlist';
import { SWRHook } from '$core-commerce/utils/types';
import useWishlistDetail from '$core-commerce/wishlist/use-wishlist-detail';

export default useWishlistDetail;

export const handler: SWRHook<GetWishlistDetailHook> = {
  fetchOptions: {
    query: getWishlistDetail,
  },

  async fetcher({ input, options, fetch }) {
    try {
      const data = await fetch({
        ...options,
        variables: {
          data: {
            id: input.id,
          },
        },
      });

      if (data?.getUserWishlistDetail) return data?.getUserWishlistDetail;
    } catch (e) {
      console.log('Customer error:', e);
    }

    return null;
  },

  useHook:
    ({ useData }) =>
    (input) => {
      return useData({
        input: { id: input?.id },
        swrOptions: {
          revalidateOnFocus: false,
          ...input?.swrOptions,
        },
      });
    },
};
