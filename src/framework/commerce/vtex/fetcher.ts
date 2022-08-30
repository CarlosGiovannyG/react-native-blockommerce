/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fetcher } from '$core-commerce/utils/types';
import { API_URL } from './const';
import { handleFetchResponse } from './utils';
import { getAllCookie } from './utils/async-storage-cookie';
import { getOrderFormId } from './utils/customer-order-form-id';
import { getSession } from './utils/customer-session';
import { getCustomerToken } from './utils/customer-token';
import fetch from 'cross-fetch';
const fetcher: Fetcher = async ({
  url = API_URL,
  method = 'POST',
  variables,
  query,
}) => {
  const { locale, ...vars } = variables ?? {};
  const allTokens = await Promise.all([
    getCustomerToken(),
    getOrderFormId(),
    getSession(),
    getAllCookie(),
  ]);

  /*const generateCookie = () => {
    let cookie = '';
    if (allTokens[2]?.segment)
      cookie += `vtex_segment=${allTokens[2]?.segment}; `;
    if (allTokens[2]?.token) cookie += `vtex_session=${allTokens[2]?.token}; `;
    if (allTokens[1]) cookie += `checkout.vtex.com=__ofid=${allTokens[1]}; `;
    return cookie;
  };*/

  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authtoken: typeof allTokens[0] === 'string' ? allTokens[0] : '',
    'Access-Control-Allow-Origin': 'same-origin',
   // Cookie: generateCookie()
  });
  
  return handleFetchResponse(
    await fetch(url, {
      method,
      credentials: 'include',
      body: JSON.stringify({ query, variables: vars }),
      headers,
    })
  );
};

export default fetcher;
