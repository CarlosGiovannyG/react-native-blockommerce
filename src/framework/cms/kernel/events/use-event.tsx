import { useHook, useMutationHook } from '../utils/use-hook';
import { mutationFetcher } from '../utils/default-fetcher';
import type { MutationHook, HookFetcherFn } from '../utils/types';
import type { EventsHook } from '../types/events';
import type { Provider } from '..';

export type UseEvent<
  H extends MutationHook<EventsHook<any>> = MutationHook<EventsHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<EventsHook> = mutationFetcher;

const fn = (provider: Provider) => provider.events?.useCMSEvent!;

const useEvent: UseEvent = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useEvent;
