/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */ /* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getGeocodeQuery } from '$commerce/utils/queries/customer/address/getGeocode';
import useGeocode from '$core-commerce/customer/address/use-geocode';
import { MutationHook, SWRHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';

interface Address {
  status: boolean;
  neighborhood: string;
  postalCode: string;
  dirtrad: string;
  geoCoordinates: [
    {
      longitud: number;
    },
    { latitud: number }
  ];
}

const NormalizeAddress = (data: Address) => {
  return {
    status: data.status,
    neighborhood: data.neighborhood,
    postalCode: data.postalCode,
    dirtrad: data.dirtrad,
    geoCoordinates: {
      longitud: data.geoCoordinates[1],
      latitud: data.geoCoordinates[0],
    },
  };
};

export default useGeocode;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: getGeocodeQuery,
  },

  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        city: input.city,
        street: input.street,
      },
    });

    if (data.address) {
      const addressData = {
        ...NormalizeAddress(data.address),
      };

      return addressData;
    } else return null;
  },
  useHook:
    ({ fetch }) =>
      () => {
        return useCallback(async function getGeoCode(input) {
          const data = await fetch({
            input,
          });
          return data;
        }, []);
      },
};
