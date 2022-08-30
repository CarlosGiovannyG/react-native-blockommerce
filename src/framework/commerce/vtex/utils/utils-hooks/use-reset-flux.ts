import { useCart } from '$commerce/cart';
import { useCheckout, useUpdateCheckout } from '$commerce/checkout';
import { useCustomer } from '$commerce/customer';
import { useCreateSession } from '$commerce/session';
import { CommerceError } from '$core-commerce/utils/errors';
import { setOrderFormId } from '../customer-order-form-id';


const useResetFlux = () => {
  const { mutate: revalidateCheckout } = useCheckout();
  const { mutate: revalidateCart } = useCart();
  const { mutate: revalidateCustomer } = useCustomer();
  const createSession = useCreateSession();

  return {
    reset: async () => {
      try {
        await setOrderFormId(null);
        await revalidateCart(null);
        const customer = await revalidateCustomer();
        await createSession({
          email: customer.email,
          firstName: customer.firstName,
          lastName: customer.lastName,
          document: customer.document,
          documentType: customer.documentType || 'cedulaCOL',
          phone: customer.cellPhone
        });
        await revalidateCheckout()
        return true;
      } catch (e) {
        throw new CommerceError({ message: 'Error resetting flux' });
      }
    },
  };
};

export default useResetFlux;
