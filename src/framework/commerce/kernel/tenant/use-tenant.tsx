/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useHook, useSWRHook } from '../utils/use-hook';
import { SWRFetcher } from '../utils/default-fetcher';
import type { HookFetcherFn, SWRHook } from '../utils/types';
import type { Provider } from '..';
import { GetTenantHook } from '$core-commerce/types/Tenant';

export type UseTenant<
  H extends SWRHook<GetTenantHook<any>> = SWRHook<GetTenantHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<GetTenantHook> = SWRFetcher;

const fn = (provider: Provider) => provider.tenant?.useTenant!;

const useTenant: UseTenant = (input) => {
  const hook = useHook(fn);
  return useSWRHook({ fetcher, ...hook })(input);
};

export default useTenant;
