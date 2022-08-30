import { useHook, useMutationHook } from '../utils/use-hook';
import { mutationFetcher } from '../utils/default-fetcher';
import type { HookFetcherFn, MutationHook } from '../utils/types';
import type { RemoveItemHook } from '../types/wishlist';
import type { Provider } from '..';

export type UseRemoveItemDetail<
  H extends MutationHook<RemoveItemHook<any>> = MutationHook<RemoveItemHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<RemoveItemHook> = mutationFetcher;

const fn = (provider: Provider) => provider.wishlist?.useRemoveItemDetail!;

const useRemoveItem: UseRemoveItemDetail = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useRemoveItem;
