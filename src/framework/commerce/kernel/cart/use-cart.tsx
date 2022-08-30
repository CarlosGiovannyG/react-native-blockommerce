/* eslint-disable @typescript-eslint/no-unsafe-return */
//import Cookies from 'js-cookie'
import { useHook, useSWRHook } from '../utils/use-hook';
import type { SWRHook, HookFetcherFn } from '../utils/types';
import type { GetCartHook } from '../types/cart';
import { Provider } from '..';
import { getOrderFormId } from '$commerce/utils/customer-order-form-id';

export type UseCart<
  H extends SWRHook<GetCartHook<any>> = SWRHook<GetCartHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<GetCartHook> = async ({
  options,
  input: { orderFormId },
  fetch,
}) => {
  return orderFormId ? await fetch(options) : null;
};

const fn = (provider: Provider) => provider.cart?.useCart!;

const useCart: UseCart = (input) => {
  const hook = useHook(fn);
  const fetcherFn = hook.fetcher ?? fetcher;
  const wrapper: typeof fetcher = async (context) => {
    context.input.orderFormId = (await getOrderFormId()) as string;
    return fetcherFn(context);
  };
  return useSWRHook({ ...hook, fetcher: wrapper })(input);
};

export default useCart;
