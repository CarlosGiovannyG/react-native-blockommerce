/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SWRHook } from '$core-commerce/utils/types';
import { getCustomerToken } from '$commerce/utils/customer-token';
import useGiftCardMovements from '$core-commerce/giftcard/use-gift-card-movements';
import {
  getCookieFromStorage,
  setCookieToStorage,
} from '$commerce/utils/async-storage-cookie';
import { parseCookie } from '$commerce/utils/parse-cookie';
import { CommerceError } from '$core-commerce/utils/errors';
import { getGiftCardMovements } from '$commerce/utils/queries/customer/giftCards/getGiftCardMovements';
import FetchCookie from '$commerce/utils/fetch-cookie';

export default useGiftCardMovements;

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: getGiftCardMovements,
  },
  async fetcher({ input, options, fetch }) {
    try {
      const userToken = await getCustomerToken();

      if (userToken) {
        const getCookie = await getCookieFromStorage(input.cookieKey);

        if (!getCookie) {
          const cookie = await FetchCookie();

          const cookieParsed = parseCookie(cookie[0]);

          setCookieToStorage(input.cookieKey, cookieParsed[input.cookieKey]);

          return { success: true };
        } else {
          const data = await fetch({
            ...options,
            variables: {
              data: {
                numeroTarjeta: input.numeroTarjeta,
              },
            },
          });

          if (data?.getGiftCardMovements?.data)
            return data.getGiftCardMovements.data;
        }
      } else {
        throw new CommerceError({
          message: 'use-gift-Card error: user is not signed in',
        });
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
        input: [
          ['cookieKey', 'TRTG'],
          ['numeroTarjeta', input.numeroTarjeta],
        ],

        swrOptions: {
          revalidateOnFocus: true,
          ...input?.swrOptions,
        },
      });
    },
};
