/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SWRHook } from '$core-commerce/utils/types';
import { OrdersHooks } from '$core-commerce/types/customer/orders';
import { getOrdersQuery } from '$commerce/utils/queries/customer/order/getOrders';
import useOrders from '$core-commerce/customer/order/use-orders';

export default useOrders;

export const handler: SWRHook<OrdersHooks['getOrders']> = {
  fetchOptions: {
    query: getOrdersQuery,
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
    });
    if (data?.getOrders?.list) {
      return {
        orders: data?.getOrders?.list,
      };
    }
    return null;
  },
  useHook:
    ({ useData }) =>
      (input) => {
        return useData({
          swrOptions: {
            revalidateOnFocus: false,
            ...input?.swrOptions,
          },
        });
      },
};
