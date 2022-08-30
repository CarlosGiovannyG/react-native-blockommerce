import { useHook, useMutationHook } from '../utils/use-hook';
import { mutationFetcher } from '../utils/default-fetcher';
import type { MutationHook, HookFetcherFn } from '../utils/types';
import type { Provider } from '..';
import { ResetPasswordHook } from '$core-commerce/types/resetPassword';

export type UseResetPassword<
  H extends MutationHook<
    ResetPasswordHook<any>
  > = MutationHook<ResetPasswordHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<ResetPasswordHook> = mutationFetcher;

const fn = (provider: Provider) => provider.auth?.useResetPassword!;

const useResetPassword: UseResetPassword = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useResetPassword;
