import { useHook, useSWRHook } from '../utils/use-hook';
import { SWRFetcher } from '../utils/default-fetcher';
import type { HookFetcherFn, SWRHook } from '../utils/types';
import type { GetWishlistDetailHook } from '../types/wishlist';
import type { Provider } from '..';

export type UseWishlistDetail<
  H extends SWRHook<GetWishlistDetailHook<any>> = SWRHook<GetWishlistDetailHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<GetWishlistDetailHook> = SWRFetcher;

const fn = (provider: Provider) => provider.wishlist?.useWishlistDetail!;

const useWishlist: UseWishlistDetail = (input) => {
  const hook = useHook(fn);
  return useSWRHook({ fetcher, ...hook })(input);
};

export default useWishlist;
