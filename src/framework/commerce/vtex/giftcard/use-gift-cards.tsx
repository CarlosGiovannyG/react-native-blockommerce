/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SWRHook } from '$core-commerce/utils/types';
import { getCustomerToken } from '$commerce/utils/customer-token';
import useGiftCards from '$core-commerce/giftcard/use-gift-cards';
import getSetCookies from '$commerce/utils/get-set-cookies';
import {
  getCookieFromStorage,
  setCookieToStorage,
} from '$commerce/utils/async-storage-cookie';
import { parseCookie } from '$commerce/utils/parse-cookie';
import { CommerceError } from '$core-commerce/utils/errors';
import { getGiftCard } from '$commerce/utils/queries/customer/giftCards/getGiftCards';

export default useGiftCards;

const ENDPOINT_INIT = 'https://trocqa.serviciostroccencosud.com.co/jwt/api';

const FetchCookie = async () => {
  const data = await fetch(`${ENDPOINT_INIT}/7u3fCWEa4ngJXVTqAJ4ksPC`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  });
  try {
    const set_cookies = getSetCookies(data.headers);

    return set_cookies;
  } catch (error) {
    console.log(error);
  }
};

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: getGiftCard,
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
                ...input,
              },
            },
          });
          if (data.getGiftCard.data) return data.getGiftCard.data;
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
        input: [['cookieKey', 'TRTG']],
        swrOptions: {
          revalidateOnFocus: true,
          ...input?.swrOptions,
        },
      });
    },
};
