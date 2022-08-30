/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
import { MutationHook } from '$core-commerce/utils/types';
import useLogout, { UseLogout } from '$core-commerce/auth/use-logout';
import { setCustomerToken } from '$commerce/utils/customer-token';
import { useCustomer } from '$commerce/customer';
import { useCallback } from 'react';
import useSession from '$commerce/session/use-session';
import { setSession } from '$commerce/utils/customer-session';
import { setOrderFormId } from '$commerce/utils/customer-order-form-id';
import { useCart } from '$commerce/cart';
import { useAddresses } from '$commerce/customer/address';
import useOrders from '$commerce/customer/order/use-orders';

export default useLogout as UseLogout<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher() {
    await setCustomerToken(null);
    await setSession(null);
    await setOrderFormId(null);
    return null;
  },
  useHook:
    ({ fetch }) =>
      () => {
        const { mutate } = useCustomer();
        const { setIsSignedIn } = useSession();
        const { mutate: mutateCart } = useCart();
        const { mutate: mutateAddress } = useAddresses();
        const { mutate: mutateOrders } = useOrders();
        return useCallback(
          async function logout() {
            const data = await fetch();
            await mutate(null, false);
            await mutateCart(null, false);
            await mutateAddress(null, false);
            await mutateOrders(null, false);
            setIsSignedIn(false);
            return data;
          },
          [mutate, mutateAddress, mutateCart, mutateOrders, setIsSignedIn]
        );
      },
};
