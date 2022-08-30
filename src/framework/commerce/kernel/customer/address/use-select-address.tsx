import type { HookFetcherFn, MutationHook } from '../../utils/types';
import type { SelectAddressHook } from '../../types/customer/address';
import type { Provider } from '../..';

import { useHook, useMutationHook } from '../../utils/use-hook';
import { mutationFetcher } from '../../utils/default-fetcher';

export type UseSelectAddress<
  H extends MutationHook<
    SelectAddressHook<any>
  > = MutationHook<SelectAddressHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<SelectAddressHook> = mutationFetcher;

const fn = (provider: Provider) =>
  provider.customer?.address?.useSelectAddress!;

const useSelectAddress: UseSelectAddress = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useSelectAddress;
