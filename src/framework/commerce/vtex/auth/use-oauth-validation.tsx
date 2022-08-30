/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback } from 'react';
import { MutationHook } from '$core-commerce/utils/types';
import useOAuthValidation, {
  UseOAuthValidation,
} from '$core-commerce/auth/use-oauth-validation';
import { setCustomerToken } from '$commerce/utils/customer-token';
import { CommerceError } from '$core-commerce/utils/errors';
import { useCustomer } from '$commerce/customer';
import { useCreateSession } from '$commerce/session';
import { validateoAuthMutation } from '$commerce/utils/queries/auth/loginWithEmailoAuth';

export default useOAuthValidation as UseOAuthValidation<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: validateoAuthMutation,
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

    if (data?.validateoAuth?.token) {
      const response = await setCustomerToken(data?.validateoAuth?.token);
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
          async function OAuthValidation(input) {
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
