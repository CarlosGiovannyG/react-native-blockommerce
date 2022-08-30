/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */ /* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getCustomerToken } from '$commerce/utils/customer-token';
import { getUserAddress } from '$commerce/utils/queries/customer/address/getUserAddress';
import useAddresses, {
  UseAddresses,
} from '$core-commerce/customer/address/use-addresses';
import { SWRHook } from '$core-commerce/utils/types';

export default useAddresses;

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: getUserAddress,
  },

  async fetcher({ input, options, fetch }) {
    try {
      const userToken = await getCustomerToken();
      if (userToken) {
        const data = await fetch({
          ...options,
        });
        if (data?.getUserAddress) return data?.getUserAddress;
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
