import { UpdateCheckoutHook } from '$core-commerce/types/checkout/updateCheckout';
import { mutationFetcher } from '$core-commerce/utils/default-fetcher';
import { HookFetcherFn, MutationHook } from '$core-commerce/utils/types';
import { useHook, useMutationHook } from '$core-commerce/utils/use-hook';
import { Provider } from '..';

export type UseUpdateCheckout<
  H extends MutationHook<
    UpdateCheckoutHook<any>
  > = MutationHook<UpdateCheckoutHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<UpdateCheckoutHook> = mutationFetcher;

const fn = (provider: Provider) => provider.checkout?.useUpdateCheckout!;

const useUpdateCheckout: UseUpdateCheckout = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(args);
};

export default useUpdateCheckout;
