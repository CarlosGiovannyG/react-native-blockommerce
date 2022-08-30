/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Provider } from '../..';
import { HookFetcherFn, SWRHook } from '$core-commerce/utils/types';
import { useHook, useSWRHook } from '$core-commerce/utils/use-hook';
import {
  GetOrderByIdHook,
  OrdersHooks,
} from '$core-commerce/types/customer/orders';
import SWRFetcher from '$core-commerce/utils/default-fetcher';

export type UseOrderById<
  H extends SWRHook<GetOrderByIdHook<any>> = SWRHook<GetOrderByIdHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<OrdersHooks['getOrderById']> = SWRFetcher;

const fn = (provider: Provider) => provider.customer?.order?.useOrderById!;

const useOrderById: UseOrderById = (input) => {
  const hook = useHook(fn);
  return useSWRHook({ fetcher, ...hook })(input);
};

export default useOrderById;
