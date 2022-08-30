/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import useSubmitCheckout from '$core-commerce/checkout/use-submit-checkout';
import { SubmitCheckoutHook } from '$core-commerce/types/checkout';
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';

export default useSubmitCheckout;

export const handler: MutationHook<SubmitCheckoutHook> = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ input: item, options, fetch }) {
    const data = await fetch({
      ...options,
      body: { item },
    });

    return data;
  },
  useHook: ({ fetch }) =>
    function useHook() {
      return useCallback(async function onSubmitCheckout(input) {
        const data = await fetch({ input });

        return data;
      }, []);
    },
};
