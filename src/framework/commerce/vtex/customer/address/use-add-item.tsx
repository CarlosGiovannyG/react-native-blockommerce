/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCheckout } from '$commerce/checkout';
import { createUserAddress } from '$commerce/utils/mutations/customer/address/createUserAddress';
import useAddItem, {
  UseAddItem,
} from '$core-commerce/customer/address/use-add-item';
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import useAddresses from './use-addresses';
import useGeocode from './use-geocode';

export default useAddItem as UseAddItem<typeof handler>;
export const handler: MutationHook<any> = {
  fetchOptions: {
    query: createUserAddress,
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        address: {
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
