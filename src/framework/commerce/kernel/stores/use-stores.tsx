/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { GetStoresHook } from '$core-commerce/types/stores';
import { HookFetcherFn, SWRHook } from '$core-commerce/utils/types';
import { useHook, useSWRHook } from '$core-commerce/utils/use-hook';
import { Provider } from '..';

// import Cookies from 'js-cookie';

export type UseStores<
  H extends SWRHook<GetStoresHook<any>> = SWRHook<GetStoresHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<GetStoresHook> = async ({
  options,
  input: { cartId },
  fetch,
}) => {
  return cartId ? await fetch(options) : null;
};

const fn = (provider: Provider) => provider.stores?.useStores!;

const useStores: UseStores = (input) => {
  const hook = useHook(fn);
  // const { cartCookie } = useCommerce();
  const fetcherFn = hook.fetcher ?? fetcher;
  const wrapper: typeof fetcher = (context) => {
    // context.input.cartId = Cookies.get(cartCookie);
    return fetcherFn(context);
  };
  return useSWRHook({ ...hook, fetcher: wrapper })(input);
};

export default useStores;
