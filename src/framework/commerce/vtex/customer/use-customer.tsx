/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SWRHook } from '$core-commerce/utils/types';
import useCustomer from '$core-commerce/customer/use-customer';
import { getProfileQuery } from '$commerce/utils/queries/customer/getProfile';
import { getCustomerToken } from '$commerce/utils/customer-token';

export default useCustomer;

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: getProfileQuery,
  },
  async fetcher({ input, options, fetch }) {
    try {
      const userToken = await getCustomerToken();
      if (userToken) {
        const data = await fetch({
          ...options,
        });
        if (data?.getProfile) return data?.getProfile;
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
            revalidateOnFocus: true,
            ...input?.swrOptions,
          },
        });
      },
};
