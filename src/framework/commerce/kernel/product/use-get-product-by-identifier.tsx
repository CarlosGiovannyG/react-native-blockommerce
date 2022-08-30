/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { mutationFetcher } from '../utils/default-fetcher';
import type { HookFetcherFn, MutationHook } from '../utils/types';
import type { Provider } from '..';
import { GetProductsByIdentifierHook } from '$core-commerce/types/product';
import { useHook, useMutationHook } from '$core-commerce/utils/use-hook';

export type UseGetProductsByIdentifier<
  H extends MutationHook<
    GetProductsByIdentifierHook<any>
  > = MutationHook<GetProductsByIdentifierHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<GetProductsByIdentifierHook> =
  mutationFetcher;

const fn = (provider: Provider) =>
  provider.products?.useGetProductsByIdentifier!;

const useGetProductsByIdentifier: UseGetProductsByIdentifier = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(args);
};

export default useGetProductsByIdentifier;
