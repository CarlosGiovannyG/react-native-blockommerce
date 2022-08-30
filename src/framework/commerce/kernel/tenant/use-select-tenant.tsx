import { useHook, useMutationHook } from '../utils/use-hook';
import { mutationFetcher } from '../utils/default-fetcher';
import type { MutationHook, HookFetcherFn } from '../utils/types';
import type { SelectTenantHook } from '../types/tenant';
import type { Provider } from '..';

export type UseSelectTenant<
  H extends MutationHook<SelectTenantHook<any>> = MutationHook<SelectTenantHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<SelectTenantHook> = mutationFetcher;

const fn = (provider: Provider) => provider.tenant?.useSelectTenant!;

const useSelectTenant: UseSelectTenant = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useSelectTenant;
