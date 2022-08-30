/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { setOrderFormId } from '$commerce/utils/customer-order-form-id';
import { orderFormQuery } from '$commerce/utils/queries';
import useCheckout from '$core-commerce/checkout/use-checkout';
import { CommerceError } from '$core-commerce/utils/errors';
import { SWRHook } from '$core-commerce/utils/types';

export default useCheckout;

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: orderFormQuery,
  },

  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        orderFormId: input?.orderFormId,
      },
    });
    if (data?.orderForm?.id) {
      if (input?.orderFormId !== data?.orderForm?.id) {
        await setOrderFormId(data?.orderForm?.id);
      }
      return {
        orderForm: data?.orderForm,
      };
    } else {
      throw new CommerceError({
        message: 'use-checkout error: orderFormId not found',
      });
    }
  },

  useHook:
    ({ useData }) =>
      (input) => {
       
        return useData({
          input: [['orderFormId', input?.orderFormId]],
          swrOptions: {
            ...input?.swrOptions,
            revalidateIfStale: true,
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
          },
        });
      },
};