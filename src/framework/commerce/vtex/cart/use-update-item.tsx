/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MutationHook } from '$core-commerce/utils/types';
import useUpdateItem from '$core-commerce/cart/use-update-item';
import { updateItemsMutation } from '$commerce/utils/mutations/checkout/updateItems';
import { CommerceError } from '$core-commerce/utils/errors';
import { useCallback } from 'react';
import useCart from './use-cart';
import { getOrderFormId } from '$commerce/utils/customer-order-form-id';

export default useUpdateItem;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: updateItemsMutation,
  },
  async fetcher({ input, options, fetch }) {
    try {
      const data = await fetch({
        ...options,
        variables: {
          orderFormId: input?.orderFormId,
          orderItems: [
            {
              id: parseInt(input?.id),
              quantity: input?.quantity,
              seller: input?.seller,
              uniqueId: input?.uniqueId,
            },
          ],
        },
      });
      return data;
    } catch (e) {
      throw new CommerceError({
        message: e.message || 'Add Item to cart Error',
      });
    }
  },
  useHook:
    ({ fetch }) =>
      () => {
        const { mutate: revalidateCart } = useCart();
        return useCallback(
          async function updateItem(input) {
            const orderFormId = await getOrderFormId();
            if (orderFormId) {
              const data = await fetch({
                input: { ...input, orderFormId: orderFormId },
              });
              await revalidateCart();
              return data;
            }
            return null;
          },
          [revalidateCart]
        );
      },
};
