/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SWRHook } from '$core-commerce/utils/types';
import { getPaymentsQuery } from '$commerce/utils/queries/customer/payments/getPayments';
import { getCustomerToken } from '$commerce/utils/customer-token';
import useCards from '$core-commerce/customer/card/use-cards';
import { CustomerCardHooks } from '$core-commerce/types/customer/card';

export default useCards;

export const handler: SWRHook<CustomerCardHooks['getCards']> = {
  fetchOptions: {
    query: getPaymentsQuery,
  },
  async fetcher({ input, options, fetch }) {
    try {
      const userToken = await getCustomerToken();
      if (userToken) {
        const data = await fetch({
          ...options,
        });
        if (data?.getUserPayments) return data?.getUserPayments;
      }
    } catch (e) {
      console.log('Customer error:', e);
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
