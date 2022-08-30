/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCart } from '$commerce/cart';
import { useCheckout } from '$commerce/checkout';
import { useUpdateSession } from '$commerce/session';
import { updateSelectedAddressMutation } from '$commerce/utils/mutations/customer/address/updateSelectedAddress';
import useSelectAddress, {
  UseSelectAddress,
} from '$core-commerce/customer/address/use-select-address';

import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import useCustomer from '../use-customer';

export default useSelectAddress as UseSelectAddress<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: updateSelectedAddressMutation,
  },
  async fetcher({ input, options, fetch }) {
    try {
      const payload = {
        orderFormId: input.orderFormId,
        input: {
          addressId: input.addressId || input.addressName,
          addressType: input?.addressType || 'residential' || 'search',
          city: input.city,
          complement: input.complement || '',
          country: input.country || 'COL',
          geoCoordinates: input.geoCoordinate,
          neighborhood: input.neighborhood,
          number: input.number,
          postalCode: input.postalCode,
          receiverName: input.receiverName,
          reference: input.reference,
          state: input.state,
          street: input.street,
        },
      };

      const data = await fetch({
        ...options,
        variables: payload,
      });

      return data;
    } catch (e) {
      console.log('useSelectedAddress error:', e);
    }

    return null;
  },
  useHook:
    ({ fetch }) =>
    () => {
      const updateSession = useUpdateSession();
      const { data: customer } = useCustomer();
      const { data: checkout } = useCheckout();
      const { mutate: revalidateCart } = useCart();
      return useCallback(
        async function selectAddress(input) {
          if (checkout?.orderForm?.id) {
            const data = await fetch({
              input: {
                ...input,
                orderFormId: checkout?.orderForm?.id,
                receiverName: `${customer?.firstName} ${customer?.lastName}`,
              },
            });

            if (
              data?.updateSelectedAddress?.shipping?.selectedAddress === null
            ) {
              await fetch({
                input: {
                  ...input,
                  orderFormId: checkout?.orderForm?.id,
                  receiverName: `${customer?.firstName} ${customer?.lastName}`,
                },
              });
            }

            if (input.geoCoordinate?.length) {
              await updateSession({
                email: customer?.email,
                firstName: customer?.firstName,
                lastName: customer?.lastName,
                document: customer?.document,
                longitud: input.geoCoordinate[1],
                latitud: input.geoCoordinate[0],
                postalCode: input.postalCode,
              });
            }
            await revalidateCart();
            return data;
          }
          return null;
        },
        [checkout?.orderForm?.id, customer, revalidateCart, updateSession]
      );
    },
};
