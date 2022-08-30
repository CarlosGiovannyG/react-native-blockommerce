/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback } from 'react';
import { MutationHook } from '$core-commerce/utils/types';
import useSignup from '$core-commerce/auth/use-signup';
import { signUpWithEmailMutation } from '$commerce/utils/mutations/auth/signUpWithEmail';
import { SignupHook } from '$core-commerce/types/signup';
import { setCustomerToken } from '$commerce/utils/customer-token';
import { CommerceError } from '$core-commerce/utils/errors';

export default useSignup;

type SignupResponse = {
  signUpWithEmail: {
    token: string;
    error: string;
  };
};

export const handler: MutationHook<SignupHook> = {
  fetchOptions: {
    query: signUpWithEmailMutation,
  },
  async fetcher({ input: { email, newPassword, accesskey }, options, fetch }) {
    if (!(email && newPassword && accesskey)) {
      throw new CommerceError({
        message: 'A email, newPassword, accesskey are required to signup',
      });
    }
    try {
      const data = await fetch<SignupResponse>({
        ...options,
        variables: {
          data: {
            email,
            newPassword,
            accesskey,
            currentPassword: '',
          },
        },
      });
      if (data.signUpWithEmail.token) {
        const response = await setCustomerToken(data.signUpWithEmail.token);
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
          message: data.signUpWithEmail.error
        });
      }
    } catch (e) {
      throw new CommerceError(e);
    }
  },
  useHook:
    ({ fetch }) =>
      () => {
        return useCallback(async function signup(input) {
          const data = await fetch({ input });
          return data;
        }, []);
      },
};
