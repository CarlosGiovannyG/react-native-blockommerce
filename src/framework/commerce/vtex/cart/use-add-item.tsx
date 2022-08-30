/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
import { getOrderFormId } from '$commerce/utils/customer-order-form-id';
import { addToCartMutation } from '$commerce/utils/mutations/checkout/addItemToCart';
import useAddItem, { UseAddItem } from '$core-commerce/cart/use-add-item';
import { CommerceError } from '$core-commerce/utils/errors';
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import useCart from './use-cart';

export default useAddItem as UseAddItem<typeof handler>;
export const handler: MutationHook<any> = {
  fetchOptions: {
    query: addToCartMutation,
  },
  async fetcher({ input, options, fetch }) {
    try {
      const data = await fetch({
        ...options,
        variables: {
          orderFormId: input?.orderFormId,
          items: [
            {
              id: parseInt(input?.id),
              quantity: input?.quantity,
              seller: input?.seller,
              inputValues: '',
              options: [],
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
        return useCallback(async function addItem(input) {
          const orderFormId = await getOrderFormId();
          if (orderFormId) {
            const data = await fetch({
              input: { ...input, orderFormId: orderFormId },
            });
            await revalidateCart();
            return data;
          }
          return null;
        }, []);
      },
};
