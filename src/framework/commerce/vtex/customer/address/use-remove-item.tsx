/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { deleteUserAddress } from '$commerce/utils/mutations/customer/address/deleteUserAddress';
import useRemoveItem, {
  UseRemoveItem,
} from '$core-commerce/customer/address/use-remove-item';
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import useAddresses from './use-addresses';

export default useRemoveItem as UseRemoveItem<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: deleteUserAddress,
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        addressName: input?.addressName,
      },
    });
    return data;
  },
  useHook:
    ({ fetch }) =>
    () => {
      const { mutate } = useAddresses();
      return useCallback(
        async function removeItem(input) {
          const data = await fetch({
            input: {
              addressName: input?.addressName,
            },
          });
          await mutate();
          return data;
        },
        [mutate]
      );
    },
};
