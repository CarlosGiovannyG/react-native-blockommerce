/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCheckout } from '$commerce/checkout';
import { createUserAddress } from '$commerce/utils/mutations/customer/address/createUserAddress';
import { updateUserAddress } from '$commerce/utils/mutations/customer/address/updateUserAddress';
import useUpdateItem, {
  UseUpdateItem,
} from '$core-commerce/customer/address/use-update-item';
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import { useAddresses } from '.';
import useGeocode from './use-geocode';

export default useUpdateItem as UseUpdateItem<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: updateUserAddress,
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        address: {
          addressName: input?.addressName,
          addressType: '',
          receiverName: 'VTEX',
          postalCode: input.address.municipalicies.dane_code,
          city: input.address.departments.value,
          state: input.address.municipalicies.value,
          country: 'COL',
          street: input?.street,
          number: '',
          neighborhood: '',
          complement: '',
          reference: null,
          geoCoordinate: input?.geoCoordinates,
        },
        orderFormId: input?.orderFormId,
      },
    });
    return data;
  },
  useHook:
    ({ fetch }) =>
    () => {
      const { data: checkout, mutate: revalidateCheckout } = useCheckout();
      const { mutate } = useAddresses();
      const getGeocode = useGeocode();
      return useCallback(
        async function addItem(input) {
          const geo = await getGeocode({
            city: `${input.address.departments.value}`,
            street: input?.street,
          });
          const data = await fetch({
            input: {
              ...input,
              addressName: input?.addressName,
              orderFormId: checkout?.orderForm?.id,
              geoCoordinates: [
                geo.geoCoordinates.latitud,
                geo.geoCoordinates.longitud,
              ],
            },
          });

          await mutate();
          await revalidateCheckout();
          return data;
        },
        [checkout?.orderForm?.id]
      );
    },
};
