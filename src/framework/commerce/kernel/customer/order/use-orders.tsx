/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Provider } from '../..';
import { HookFetcherFn, SWRHook } from '$core-commerce/utils/types';
import { useHook, useSWRHook } from '$core-commerce/utils/use-hook';
import { OrdersHooks } from '$core-commerce/types/customer/orders';
import SWRFetcher from '$core-commerce/utils/default-fetcher';

export type UseOrders<
  H extends SWRHook<OrdersHooks['getOrders']> = SWRHook<
    OrdersHooks['getOrders']
  >
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<OrdersHooks['getOrders']> = SWRFetcher;

const fn = (provider: Provider) => provider.customer?.order?.useOrders!;

const useOrders: UseOrders = (input) => {
  const hook = useHook(fn);
  return useSWRHook({ fetcher, ...hook })(input);
};

export default useOrders;
