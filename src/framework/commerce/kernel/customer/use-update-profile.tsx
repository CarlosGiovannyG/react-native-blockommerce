import { useHook, useMutationHook } from '../utils/use-hook';
import { mutationFetcher } from '../utils/default-fetcher';
import type { HookFetcherFn, MutationHook } from '../utils/types';
import type { Provider } from '..';
import { UpdateProfileHook } from '$core-commerce/types/customer/updateProfile';

export type UseUpdateProfile<
  H extends MutationHook<
    UpdateProfileHook<any>
  > = MutationHook<UpdateProfileHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<UpdateProfileHook> = mutationFetcher;

const fn = (provider: Provider) => provider.customer?.useUpdateProfile;

const useUpdateProfile: UseUpdateProfile = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useUpdateProfile;
