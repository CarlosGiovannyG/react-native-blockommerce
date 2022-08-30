/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fetcher } from '$core-commerce/utils/types';
import { API_URL } from './const';
import { handleFetchResponse } from './utils';

const fetcher: Fetcher = async ({
  url = API_URL,
  method = 'POST',
  variables,
  query,
}) => {
  const { locale, ...vars } = variables ?? {};


  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };


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
