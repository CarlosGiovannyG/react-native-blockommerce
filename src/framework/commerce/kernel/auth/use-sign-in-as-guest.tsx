import { useHook, useMutationHook } from '../utils/use-hook';
import { mutationFetcher } from '../utils/default-fetcher';
import type { MutationHook, HookFetcherFn } from '../utils/types';
import type { SignInAsGuestHook } from '../types/sign-in-as-guest';
import type { Provider } from '..';

export type UseSignInAsAGuest<
  H extends MutationHook<
    SignInAsGuestHook<any>
  > = MutationHook<SignInAsGuestHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<SignInAsGuestHook> = mutationFetcher;

const fn = (provider: Provider) => provider.auth?.useSignInAsAGuest!;

const useSignInAsAGuest: UseSignInAsAGuest = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useSignInAsAGuest;
