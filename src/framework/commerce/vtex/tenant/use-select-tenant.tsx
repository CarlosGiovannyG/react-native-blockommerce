/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
import { MutationHook } from '$core-commerce/utils/types';
import useSelectTenant, {
  UseSelectTenant,
} from '$core-commerce/tenant/use-select-tenant';
import { useCallback } from 'react';
export default useSelectTenant as UseSelectTenant<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        data: {
          ...input,
        },
      },
    });
  },
  useHook:
    ({ fetch }) =>
    () => {
      return useCallback(
        async function selectTenant(input) {
          const data = await fetch({ input });
          return data;
        },
        []
      );
    },
};
