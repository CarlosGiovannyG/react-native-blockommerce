/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback } from 'react';
import { MutationHook } from '$core-commerce/utils/types';
import useOtp, { UseOtp } from '$core-commerce/auth/use-otp';
import { sendAccessKeyMutation } from '$commerce/utils/mutations';

export default useOtp as UseOtp<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: sendAccessKeyMutation,
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        data: input,
      },
    });

    return data;
  },
  useHook:
    ({ fetch }) =>
      () => {
        return useCallback(async function Otp(input) {
          const data = await fetch({ input });
          return data;
        }, []);
      },
};
