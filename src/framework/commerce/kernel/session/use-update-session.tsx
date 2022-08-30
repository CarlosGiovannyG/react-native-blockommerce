import { UpdateSessionHook } from '$core-commerce/types/session';
import { mutationFetcher } from '$core-commerce/utils/default-fetcher';
import { HookFetcherFn, MutationHook } from '$core-commerce/utils/types';
import { useHook, useMutationHook } from '$core-commerce/utils/use-hook';
import { Provider } from '..';

export type UseUpdateSession<
  H extends MutationHook<
    UpdateSessionHook<any>
  > = MutationHook<UpdateSessionHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<UpdateSessionHook> = mutationFetcher;

const fn = (provider: Provider) => provider.session?.useUpdateSession!;

const useUpdateSession: UseUpdateSession = (input) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(input);
};

export default useUpdateSession;
