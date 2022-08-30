/* eslint-disable react-hooks/rules-of-hooks */
import { MutationHook } from '$core-commerce/utils/types';
import useLogin, { UseLogin } from '$core-commerce/auth/use-login';
import { useCallback } from 'react';
import { signInWithPasswordMutation } from '$commerce/utils/mutations/auth/signInWithEmail';
import { CommerceError } from '$core-commerce/utils/errors';
import { setCustomerToken } from '$commerce/utils/customer-token';
import { useCreateSession } from '$commerce/session';
import { useCustomer } from '$commerce/customer';
export default useLogin as UseLogin<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: signInWithPasswordMutation,
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        data: {
          ...input,
        },
      },
    });
    if (data?.signInWithPassword?.token) {
      const response = await setCustomerToken(data?.signInWithPassword?.token);
      if (!response.success && response.error) {
        throw new CommerceError({
          message: 'The access code could not be assigned.',
        });
      }
      return {
        success: response.success,
      };
    } else {
      throw new CommerceError({
        message: 'Token not found',
      });
    }
  },
  useHook:
    ({ fetch }) =>
      () => {
        const { mutate } = useCustomer();
        const createSession = useCreateSession();

        return useCallback(
          async function login(input) {
            const data = await fetch({ input });
            const customer = await mutate();
            await createSession({
              email: customer.email,
              firstName: customer.firstName,
              lastName: customer.lastName,
              document: customer.document,
              documentType: customer.documentType || 'cedulaCOL',
              phone: customer.cellPhone
            });
            return data;
          },
          [createSession, mutate]
        );
      },
};
