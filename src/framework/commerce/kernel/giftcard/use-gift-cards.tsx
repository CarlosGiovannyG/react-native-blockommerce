import { useHook, useSWRHook } from '../utils/use-hook';
import { SWRFetcher } from '../utils/default-fetcher';
import type { GetGiftCardsHook } from '../types/giftcard';
import type { HookFetcherFn, SWRHook } from '../utils/types';
import type { Provider } from '..';

export type UseGiftCards<
  H extends SWRHook<GetGiftCardsHook<any>> = SWRHook<GetGiftCardsHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<GetGiftCardsHook> = SWRFetcher;

const fn = (provider: Provider) => provider.giftcard?.useGiftCards!;

const useGiftCards: UseGiftCards = (input) => {
  const hook = useHook(fn);
  return useSWRHook({ fetcher, ...hook })(input);
};

export default useGiftCards;
