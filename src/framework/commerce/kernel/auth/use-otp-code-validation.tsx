import { useHook, useMutationHook } from '../utils/use-hook';
import { mutationFetcher } from '../utils/default-fetcher';
import type { HookFetcherFn, MutationHook } from '../utils/types';
import type { Provider } from '..';
import { OtpCodeValidationHook } from '$core-commerce/types/otp-code-validation';

export type UseOtpCodeValidation<
  H extends MutationHook<
    OtpCodeValidationHook<any>
  > = MutationHook<OtpCodeValidationHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<OtpCodeValidationHook> = mutationFetcher;

const fn = (provider: Provider) => provider.auth?.useOtpCodeValidation!;

const useOtpCodeValidation: UseOtpCodeValidation = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useOtpCodeValidation;
