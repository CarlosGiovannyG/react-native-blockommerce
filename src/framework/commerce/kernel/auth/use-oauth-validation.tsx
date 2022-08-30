import { useHook, useMutationHook } from '../utils/use-hook';
import { mutationFetcher } from '../utils/default-fetcher';
import type { HookFetcherFn, MutationHook } from '../utils/types';
import type { Provider } from '..';
import { OAuthValidationHook } from '$core-commerce/types/oauth-validation';

export type UseOAuthValidation<
  H extends MutationHook<
    OAuthValidationHook<any>
  > = MutationHook<OAuthValidationHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<OAuthValidationHook> = mutationFetcher;

const fn = (provider: Provider) => provider.auth?.useOAuthValidation!;

const useOAuthValidation: UseOAuthValidation = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useOAuthValidation;
