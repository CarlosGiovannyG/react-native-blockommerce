import type { HookFetcherFn, MutationHook } from '../../utils/types';
import type { Provider } from '../..';

import { useHook, useMutationHook } from '../../utils/use-hook';
import { mutationFetcher } from '../../utils/default-fetcher';
import { GetGeocodeHook } from '$core-commerce/types/customer/address';

export type UseGeoCode<
  H extends MutationHook<GetGeocodeHook<any>> = MutationHook<GetGeocodeHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<GetGeocodeHook> = mutationFetcher;

const fn = (provider: Provider) => provider.customer?.address?.useGeocode!;

const useGeocode: UseGeoCode = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useGeocode;
