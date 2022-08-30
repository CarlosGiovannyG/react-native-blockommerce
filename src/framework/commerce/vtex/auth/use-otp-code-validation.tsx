/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';
import { MutationHook } from '$core-commerce/utils/types';
import useOtpCodeValidation, {
  UseOtpCodeValidation,
} from '$core-commerce/auth/use-otp-code-validation';
import { validateAccessKeyMutation } from '$commerce/utils/queries/auth/loginWithEmailOtp';
import { setCustomerToken } from '$commerce/utils/customer-token';
import { CommerceError } from '$core-commerce/utils/errors';
import { useCustomer } from '$commerce/customer';
import { useCreateSession } from '$commerce/session';

export default useOtpCodeValidation as UseOtpCodeValidation<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: validateAccessKeyMutation,
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
    if (data?.validateAccessKey?.token) {
      const response = await setCustomerToken(data?.validateAccessKey?.token);
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
          async function OtpCodeValidation(input) {
            const data = await fetch({ input });
            const customer = await mutate();
            await createSession({
              email: customer.email,
              firstName: customer.firstName,
              lastName: customer.lastName,
              document: customer.document,
              documentType: customer.documentType || 'cedulaCOL',
              phone: customer.cellPhone
            });
            return data;
          },
          [createSession, mutate]
        );
      },
};
