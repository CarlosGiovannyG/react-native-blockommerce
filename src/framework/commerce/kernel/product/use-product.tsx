/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useHook, useSWRHook } from '../utils/use-hook';
import { SWRFetcher } from '../utils/default-fetcher';
import type { HookFetcherFn, SWRHook } from '../utils/types';
import type { GetProductHook } from '../types/product';
import type { Provider } from '..';

export type UseProduct<
  H extends SWRHook<GetProductHook<any>> = SWRHook<GetProductHook<any>>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<GetProductHook<any>> = SWRFetcher;

const fn = (provider: Provider) => provider.products?.useProduct!;

const useProduct: UseProduct = (input) => {
  const hook = useHook(fn);
  return useSWRHook({ fetcher, ...hook })(input);
};

export default useProduct;
