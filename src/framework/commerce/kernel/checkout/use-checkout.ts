/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { SWRHook, HookFetcherFn } from '../utils/types';
import type { GetCheckoutHook } from '../types/checkout';

// import Cookies from 'js-cookie';

import { useHook, useSWRHook } from '../utils/use-hook';
import { Provider } from '..';
import { getOrderFormId } from '$commerce/utils/customer-order-form-id';

export type UseCheckout<
  H extends SWRHook<GetCheckoutHook<any>> = SWRHook<GetCheckoutHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<GetCheckoutHook> = async ({
  options,
  input: { orderFormId },
  fetch,
}) => {
  return orderFormId ? await fetch(options) : null;
};

const fn = (provider: Provider) => provider.checkout?.useCheckout!;

const useCheckout: UseCheckout = (input) => {
  const hook = useHook(fn);
  // const { cartCookie } = useCommerce();
  const fetcherFn = hook.fetcher ?? fetcher;
  const wrapper: typeof fetcher = async (context) => {
    context.input.orderFormId = await getOrderFormId();
    return fetcherFn(context);
  };
  return useSWRHook({ ...hook, fetcher: wrapper })(input);
};

export default useCheckout;
