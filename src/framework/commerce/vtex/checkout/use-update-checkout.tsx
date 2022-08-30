/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback } from 'react';
import { MutationHook } from '$core-commerce/utils/types';
import { CommerceError } from '$core-commerce/utils/errors';
import { updateOrderFormProfileQuery } from '$commerce/utils/queries/order-form/updateForm';
import useUpdateCheckout from '$core-commerce/checkout/use-update-checkout';

export default useUpdateCheckout;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: updateOrderFormProfileQuery,
  },
  async fetcher({ input, options, fetch }) {
    try {
      const data = await fetch({
        ...options,
        variables: {
          orderFormId: input?.orderFormId,
          input: input.input,
        },
      });
      return data;
    } catch (e) {
      throw new CommerceError({
        message: e.message || 'Update Session Error',
      });
    }
  },
  useHook:
    ({ fetch }) =>
      () => {
        return useCallback(async function UpdateCheckout(input) {
          const data = await fetch({ input });
          return data;
        }, []);
      },
};
