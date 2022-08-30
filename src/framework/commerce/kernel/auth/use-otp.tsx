import { useHook, useMutationHook } from '../utils/use-hook';
import { mutationFetcher } from '../utils/default-fetcher';
import type { HookFetcherFn, MutationHook } from '../utils/types';
import type { OtpHook } from '../types/Otp';
import type { Provider } from '..';

export type UseOtp<
  H extends MutationHook<OtpHook<any>> = MutationHook<OtpHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<OtpHook> = mutationFetcher;

const fn = (provider: Provider) => provider.auth?.useOtp!;

const useOtp: UseOtp = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useOtp;
