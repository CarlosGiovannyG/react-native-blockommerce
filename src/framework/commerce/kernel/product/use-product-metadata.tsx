/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useHook, useSWRHook } from '../utils/use-hook';
import { SWRFetcher } from '../utils/default-fetcher';
import type { HookFetcherFn, SWRHook } from '../utils/types';
import type { GetProductMetadataHook } from '../types/product-metadata';
import type { Provider } from '..';

export type UseProductMetadata<
  H extends SWRHook<GetProductMetadataHook<any>> = SWRHook<GetProductMetadataHook<any>>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<GetProductMetadataHook<any>> = SWRFetcher;

const fn = (provider: Provider) => provider.products?.useProductMetadata!;

const useProductMetadata: UseProductMetadata = (input) => {
  const hook = useHook(fn);
  return useSWRHook({ fetcher, ...hook })(input);
};

export default useProductMetadata;
