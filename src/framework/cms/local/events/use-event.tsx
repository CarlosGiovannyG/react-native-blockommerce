/* eslint-disable react-hooks/rules-of-hooks */
import useEvent, { UseEvent } from '$core-cms/events/use-event';
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';

export default useEvent as UseEvent<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ input, options, fetch }) {},
  useHook:
    ({ fetch }) =>
    () => {
      return useCallback(async function login(input) {
        const data = await fetch({ input });
        return data;
      }, []);
    },
};
