/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useHook, useSWRHook } from '../utils/use-hook';
import { SWRFetcher } from '../utils/default-fetcher';
import type { TopSearchesHook } from '../types/top-searches';
import type { HookFetcherFn, SWRHook } from '../utils/types';
import type { Provider } from '..';

export type UseTopSearches<
  H extends SWRHook<TopSearchesHook<any>> = SWRHook<TopSearchesHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<TopSearchesHook> = SWRFetcher;

const fn = (provider: Provider) => provider.products?.useTopSearches!;

const useTopSearches: UseTopSearches = (input) => {
  const hook = useHook(fn);
  return useSWRHook({ fetcher, ...hook })(input);
};

export default useTopSearches;
