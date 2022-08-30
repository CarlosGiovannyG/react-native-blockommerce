import { useHook, useMutationHook } from '../utils/use-hook';
import { mutationFetcher } from '../utils/default-fetcher';
import type { MutationHook } from '../utils/types';
import type { UpdateWishlistHook } from '../types/wishlist';
import type { Provider } from '..';

export type UseUpdateItemDetail<
  H extends MutationHook<
    UpdateWishlistHook<any>
  > = MutationHook<UpdateWishlistHook>
> = ReturnType<H['useHook']>;

export const fetcher = mutationFetcher;

const fn = (provider: Provider) => provider.wishlist?.useUpdateItemDetail!;

const useUpdateItemDetail: UseUpdateItemDetail = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useUpdateItemDetail;
