/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import parseMasterDataDocuments from '$commerce/utils/parseMasterDataDocuments';
import { getTenantsQuery } from '$commerce/utils/queries/tenant/getTenant';
import useTenant from '$core-commerce/tenant/use-tenant';
import { CommerceError } from '$core-commerce/utils/errors';
import { SWRHook } from '$core-commerce/utils/types';

export default useTenant;

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: getTenantsQuery,
  },

  async fetcher({ input, options, fetch }) {
    /*const states = await fetch({
      ...options,
      variables: {
        acronym: 'ST',
        where: 'isactivePickup=true',
        fields: ['Name'],
      },
    });*/

    /*const cityRawData = await fetch({
      ...options,
      variables: {
        acronym: 'SA',
        where: 'State="ae145216-2de4-11ec-82ac-12444306e6c3" AND isactive=true',
        fields: ['Name'],
      },
    });
    const city = cityRawData?.documents[0]?.fields[1].value;
    
    */

    const tenants = await fetch({
      ...options,
      variables: {
        acronym: 'WK',
        where: `isactive=true`,
        fields: [
          'city',
          'lat',
          'lon',
          'name',
          'neighborhood',
          'number',
          'pickupId',
          'postalCode',
          'street',
        ],
      },
    });

    if (tenants?.documents) {
      return {
        tenants: parseMasterDataDocuments(tenants?.documents),
      };
    } else {
      throw new CommerceError({
        message: 'use-tenant error',
      });
    }
  },

  useHook:
    ({ useData }) =>
    (input) => {
      return useData({
        input: [],
        swrOptions: {
          ...input?.swrOptions,
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        },
      });
    },
};
