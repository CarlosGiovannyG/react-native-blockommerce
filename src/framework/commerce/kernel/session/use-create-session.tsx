import { CreateSessionHook } from '$core-commerce/types/session';
import { mutationFetcher } from '$core-commerce/utils/default-fetcher';
import { HookFetcherFn, MutationHook } from '$core-commerce/utils/types';
import { useHook, useMutationHook } from '$core-commerce/utils/use-hook';
import { Provider } from '..';

export type UseCreateSession<
  H extends MutationHook<
    CreateSessionHook<any>
  > = MutationHook<CreateSessionHook>
> = ReturnType<H['useHook']>;

export const fetcher: HookFetcherFn<CreateSessionHook> = mutationFetcher;

const fn = (provider: Provider) => provider.session?.useCreateSession!;

const useCreateSession: UseCreateSession = (...args) => {
  const hook = useHook(fn);
  return useMutationHook({ fetcher, ...hook })(...args);
};

export default useCreateSession;
