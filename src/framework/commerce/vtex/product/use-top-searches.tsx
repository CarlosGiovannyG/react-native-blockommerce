/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SWRHook } from '$core-commerce/utils/types';
import useTopSearches, {
  UseTopSearches,
} from '$core-commerce/product/use-top-searches';
import { topSearchesQuery } from '$commerce/utils/queries';

export default useTopSearches as UseTopSearches<typeof handler>;

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: topSearchesQuery,
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        data: {
          ...input,
        },
      },
    });
    return data;
  },
  useHook:
    ({ useData }) =>
      (input) => {
        return useData({
          swrOptions: {
            revalidateOnFocus: true,
            ...input?.swrOptions,
          },
        });
      },
};
